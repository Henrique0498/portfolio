import { refreshToken } from '@/services/api/actions/authenticate'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const tokenRequest = request.cookies.get('token')?.value ?? ''

  const error = await refreshToken(tokenRequest)
    .then(({ data }) => {
      cookies().set('token', data.access_token)
    })
    .catch(() => true)

  if (error) {
    return NextResponse.redirect(new URL('/noAuthorized', request.url))
  }

  return new NextResponse('Refreshed token', { status: 200 })
}
