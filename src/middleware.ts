import { rateLimit } from 'express-rate-limit'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

export async function middleware(request: NextRequest, res) {
  // console.log(await limiter(request, res, () => {}))

  if (!isValidRequest(request)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}

function isValidRequest(request: NextRequest) {
  return true
}
