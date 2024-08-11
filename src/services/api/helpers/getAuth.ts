import axios from 'axios'
import { TyResponsePostAuth } from '../types'

export default async function getToken() {
  return await axios.get<TyResponsePostAuth>('api/v1/auth/token')
}
