import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { localRefreshToken } from './actions/authenticate'
import { TyGenericErroResponseAxios } from './actions/types'
import getAuth from './helpers/getAuth'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

api.interceptors.request.use(requestSuccess)
api.interceptors.response.use(responseSuccess, responseError)

function responseSuccess(response: AxiosResponse) {
  return response
}

async function responseError(error: TyGenericErroResponseAxios) {
  const originalRequest = error.config

  if (
    error.response &&
    error.response.status === 401 &&
    !originalRequest._retry
  ) {
    return await localRefreshToken()
      .then((response) => {
        if (response.status !== 200) {
          return response
        } else {
          const { access_token } = response.data

          originalRequest.headers!.Authorization = `Bearer ${access_token}`
          api.defaults.headers.Authorization = `Bearer ${access_token}`

          originalRequest._retry = true
          return api(originalRequest)
        }
      })
      .catch(() => {
        window.location.href = '/noAuthorized'
      })
  }

  return Promise.reject(error)
}

async function requestSuccess(request: InternalAxiosRequestConfig) {
  const headerAuthorization = request.headers.Authorization as
    | string
    | undefined

  if (
    headerAuthorization?.includes('Bearer') ||
    request.url === 'v1/auth/public'
  ) {
    return request
  }
  return await getAuth()
    .then(({ data }) => {
      const { access_token } = data

      request.headers.Authorization = `Bearer ${access_token}`
      api.defaults.headers.Authorization = `Bearer ${access_token}`

      return request
    })
    .catch(() => {
      return Promise.reject(new Error('not authorized'))
    })
}

export default api
