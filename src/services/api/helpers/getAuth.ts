import { TyResponsePostAuth } from '../types'
import { apiLocal } from '..'

export default async function getToken() {
  return await apiLocal.get<TyResponsePostAuth>('api/v1/auth/token')
}
