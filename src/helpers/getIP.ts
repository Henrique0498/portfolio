import { NextRequest } from 'next/server'

export default function getIp({ headers, ip }: NextRequest) {
  const ipHeader = headers.get('x-forwarded-for')
  const ipClient = headers.get('x-real-ip')!

  return ipHeader || ip || ipClient
}
