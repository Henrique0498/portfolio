import { TyResponsePostAuth } from '../types'
import { apiLocal } from '..'

interface InPostGenerateLog {
  error: {
    message: string
    stack: string
  }
  route: string
}

export default async function generateLog(data: InPostGenerateLog) {
  return await apiLocal.post<TyResponsePostAuth>('/api/v1/error/log', data)
}
