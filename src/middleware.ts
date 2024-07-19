'use server'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { verifyToken } from './services/auth/verifyToken'
import { post_AuthenticatePublic } from './services/api/actions/authenticate'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const tokenIsValid = await verifyToken(request.cookies.get('token')?.value)
  let token = ''
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.ip ||
    (request.headers.get('x-real-ip') as string)

  if (!tokenIsValid) {
    const publicKey = process.env.PUBLIC_KEY as string
    token = await post_AuthenticatePublic({
      publicKey,
      ip
    }).then((res) => res.data.access_token)
  }

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 1
  })

  return response
}

export const config = {
  matcher: '/'
}
