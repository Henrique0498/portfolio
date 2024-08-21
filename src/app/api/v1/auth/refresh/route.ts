import generateToken from '@/helpers/generateToken'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { error, access_token, expires } = await generateToken(request)

  if (error) {
    return NextResponse.redirect(new URL('/noAuthorized', request.url))
  }

  cookies().set('token', access_token!, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 1,
    expires: new Date(expires!)
  })

  return NextResponse.json({ access_token })
}
