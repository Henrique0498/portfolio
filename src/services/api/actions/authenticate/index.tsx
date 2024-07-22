'use service'

import api from '../..'
import { TyRequestPostAuthPublic, TyResponsePostAuth } from './types'
import axios from 'axios'

const POST_AUTHENTICATION_PUBLIC = 'v1/auth/public'
const POST_AUTHENTICATION_REFRESH = 'v1/auth/refresh'
const POST_AUTHENTICATION_REFRESH_LOCAL = 'api/v1/auth/refresh'

export async function post_AuthenticatePublic(data: TyRequestPostAuthPublic) {
  return api.post<TyResponsePostAuth>(POST_AUTHENTICATION_PUBLIC, data)
}

export async function refreshToken(token: string) {
  return api.post<TyResponsePostAuth>(POST_AUTHENTICATION_REFRESH, null, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export async function localRefreshToken() {
  return axios.post<string>(POST_AUTHENTICATION_REFRESH_LOCAL)
}