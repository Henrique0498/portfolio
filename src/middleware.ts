'use server'

import { NextResponse } from 'next/server'
import type { MiddlewareConfig, NextRequest } from 'next/server'

import { verifyToken } from './services/auth/verifyToken'
import { post_AuthenticatePublic } from './services/api/actions/authenticate'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const tokenIsValid = await verifyToken(request.cookies.get('token')?.value)

  if (request.nextUrl.pathname.includes('/noAuthorized')) {
    if (tokenIsValid) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return response
  }

  if (!tokenIsValid) {
    const ip = getIp(request)
    const publicKey = process.env.PUBLIC_KEY!

    const body = {
      publicKey,
      ip
    }

    const { access_token, expires } = await post_AuthenticatePublic(body)
      .then((res) => {
        return res.data
      })
      .catch(() => {
        return { access_token: null, expires: '' }
      })

    if (!access_token) {
      return NextResponse.redirect(new URL('/noAuthorized', request.url))
    }

    response.cookies.set('token', access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1,
      expires: new Date(expires)
    })
  }

  return response
}

function getIp({ headers, ip }: NextRequest) {
  const ipHeader = headers.get('x-forwarded-for')
  const ipClient = headers.get('x-real-ip')!

  return ipHeader || ip || ipClient
}

export const config: MiddlewareConfig = {
  matcher: ['/', '/noAuthorized']
}
