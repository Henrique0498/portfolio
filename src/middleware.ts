'use server'

import { NextResponse } from 'next/server'
import type { MiddlewareConfig, NextRequest } from 'next/server'

import { verifyToken } from './services/auth/verifyToken'
import generateToken from './helpers/generateToken'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const tokenIsValid = await verifyToken(request.cookies.get('token')?.value)

  if (request.nextUrl.pathname.includes('/noAuthorized')) {
    if (tokenIsValid) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return response
  }

  const { access_token, error, expires } = await generateToken(
    request,
    !tokenIsValid
  )

  if (error) {
    return NextResponse.redirect(new URL('/noAuthorized', request.url))
  }

  response.cookies.set('token', access_token!, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 1,
    expires: new Date(expires!)
  })

  return response
}

export const config: MiddlewareConfig = {
  matcher: ['/', '/noAuthorized']
}
