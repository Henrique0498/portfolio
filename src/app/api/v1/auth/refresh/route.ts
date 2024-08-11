import { refreshToken } from '@/services/api/actions/authenticate'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const tokenRequest = request.cookies.get('token')?.value ?? ''

  const { error, access_token } = await refreshToken(tokenRequest)
    .then(({ data }) => {
      const { access_token, expires } = data

      cookies().set('token', access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 1,
        expires: new Date(expires)
      })

      return { error: false, access_token }
    })
    .catch(() => ({ error: true, access_token: '' }))

  if (error) {
    return NextResponse.redirect(new URL('/noAuthorized', request.url))
  }

  return NextResponse.json({ access_token })
}
