import {
  post_AuthenticatePublic,
  refreshToken
} from '@/services/api/actions/authenticate'
import { NextRequest } from 'next/server'
import getIp from './getIP'
import { verifyToken } from '@/services/auth/verifyToken'
import generateLog from '@/services/api/helpers/generateLog'

export default async function generateToken(
  request: NextRequest,
  generateNewToken = false
) {
  const tokenRequest = request.cookies.get('token')?.value ?? ''
  const tokenIsValid = await verifyToken(tokenRequest)

  if (!tokenRequest) {
    console.log('deu o caralho')
    const data = {
      error: {
        message: 'Não bateu no refresh',
        stack: `token: ${tokenRequest} \n tokenIsValid: ${tokenIsValid}`
      },
      route: 'token/default'
    }

    await generateLog(data)

    return { error: true, access_token: null, expires: null }
  }

  if (tokenIsValid) {
    console.log('não fez nada')
    return { error: false, access_token: tokenRequest, expires: '' }
  }

  if (generateNewToken) {
    const ip = getIp(request)
    const publicKey = process.env.PUBLIC_KEY!
    const body = {
      publicKey,
      ip
    }
    console.log('create')

    return await post_AuthenticatePublic(body)
      .then(({ data }) => {
        const { access_token, expires } = data

        return { error: false, access_token, expires }
      })
      .catch(async (e) => {
        const data = {
          error: {
            message: e.message,
            stack: e.stack
          },
          route: 'token/public'
        }

        await generateLog(data)

        return { error: true, access_token: null, expires: null }
      })
  }

  console.log('refresh')

  return await refreshToken(tokenRequest)
    .then((response) => {
      const { access_token, expires } = response.data

      return { error: false, access_token, expires }
    })
    .catch(async (e) => {
      const data = {
        error: {
          message: e.message,
          stack: e.stack
        },
        route: 'token/refresh'
      }

      await generateLog(data)

      return { error: true, access_token: null, expires: null }
    })
}
