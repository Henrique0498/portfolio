import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const access_token = request.cookies.get('token')?.value ?? ''

  return NextResponse.json({ access_token })
}
