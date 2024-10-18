import { AxiosError, InternalAxiosRequestConfig } from 'axios'

export interface InGenericErroResponseAxios
  extends AxiosError<InResponseErrorBackend> {
  config: InConfigAxiosResponseErro
}

interface InConfigAxiosResponseErro extends InternalAxiosRequestConfig {
  _retry: boolean
}

export type TyResponsePostAuth = {
  access_token: string
  expires: string
}
export interface InResponseErrorBackend {
  message: string
  error: string
  statusCode: number
}
