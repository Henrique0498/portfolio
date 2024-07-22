import axios, { AxiosResponse } from 'axios'
import { localRefreshToken } from './actions/authenticate'
import { TyGenericErroResponseAxios } from './actions/types'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

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
      .then((data) => {
        if (data.status !== 200) {
          return data
        } else {
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

export default api
