import { AxiosRequestConfig } from 'axios'

export type TyGenericErroResponseAxios = {
  response: { status: number }
  config: InConfigAxiosResponseErro
}

interface InConfigAxiosResponseErro extends AxiosRequestConfig {
  _retry: boolean
}
