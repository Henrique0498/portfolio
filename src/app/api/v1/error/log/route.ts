import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'development') {
      const body = await request.json()
      const { error, route } = body

      const routeName = route.replace(/\//g, '_')
      const logDir = path.join(process.cwd(), 'logs', routeName)

      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true })
      }

      const timestamp = new Date().toISOString().replace(/:/g, '-')
      const logFile = path.join(logDir, `${timestamp}.txt`)

      const logMessage = `Error: ${error.message}\nStack: ${error.stack}\nRequest: ${JSON.stringify(request)}\n`
      fs.writeFileSync(logFile, logMessage, 'utf8')
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Failed to write log.' },
      { status: 500 }
    )
  }
}
