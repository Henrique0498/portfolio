import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const minute = 60 * 100

const limiter = {
  time: 10 * minute,
  max: 100
}

const databaseIpsAccess: { [key: string]: any[] } = {}

export function middleware(request: NextRequest, res) {
  /*
  if (!isValidRequest(request)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    )
  }
  */

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}

function isValidRequest(request: NextRequest) {
  let result = true
  const ipAddress = 'request.ip'
  const time = new Date().getTime()
  const timeLimited = time - limiter.time
  const modifiedDatabaseIp =
    databaseIpsAccess[ipAddress]?.filter(
      (access) => access.time >= timeLimited
    ) ?? []

  console.log(databaseIpsAccess)
  if (modifiedDatabaseIp.length > limiter.max) {
    result = false
  }

  console.log(modifiedDatabaseIp)
  modifiedDatabaseIp.push({
    time: time
  })

  databaseIpsAccess[ipAddress] = modifiedDatabaseIp

  return result
}
