import axios, { AxiosResponse } from 'axios'
import { localRefreshToken } from './actions/authenticate'
import generateLog from './helpers/generateLog'
import { InGenericErroResponseAxios } from './types'

const baseURL = process.env.NEXT_PUBLIC_API_URL
const baseURLLocal = process.env.NEXT_PUBLIC_API_LOCAL_URL

const api = axios.create({
  baseURL,
  withCredentials: true
})

export const apiLocal = axios.create({
  baseURL: baseURLLocal,
  withCredentials: true
})

api.interceptors.response.use(responseSuccess, responseError)

function responseSuccess(response: AxiosResponse) {
  const urls = [`${baseURL}/v1/auth/public`, `${baseURL}/v1/auth/refresh`]

  if (urls.includes(response.request.url)) {
    const { access_token } = response.data

    response.config.headers!.Authorization = `Bearer ${access_token}`
    api.defaults.headers.Authorization = `Bearer ${access_token}`
  }

  return response
}

async function responseError(error: InGenericErroResponseAxios) {
  const originalRequest = error.config

  if (
    error.response &&
    error.response.status === 401 &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true

    try {
      const responseRefresh = await localRefreshToken()

      if (responseRefresh.status !== 200) {
        return Promise.reject(responseRefresh)
      }

      return api(originalRequest)
    } catch (refreshError) {
      errorManager(error, 'refresh/local/token')
      if (typeof window !== 'undefined') {
        window.location.href = '/noAuthorized'
      }

      return Promise.reject(refreshError)
    }
  }

  errorManager(error, originalRequest.url)

  return Promise.reject(error)
}

async function errorManager(
  error: InGenericErroResponseAxios | Error,
  url = 'No route information'
) {
  try {
    let message = 'Request failed'
    let stack = 'No stack trace available'

    if ('stack' in error) {
      message = error?.message ?? 'Request failed'
      stack = error?.stack ?? 'No stack trace available'
    } else if ('response' in error) {
      message = error.response?.data?.message ?? 'Request failed'
      stack = error.response?.data?.error ?? 'No stack trace available'
    }

    const data = {
      error: {
        message,
        stack
      },
      route: url
    }
    await generateLog(data)
  } catch (e) {
    console.log(e)
  }
}

export default api
