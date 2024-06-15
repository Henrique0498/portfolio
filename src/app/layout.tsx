import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { PropsWithChildren } from 'react'

import '@/styles/global.scss'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Layout NextJS',
  description: 'Um layout de next'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} bg-gradient-to-tr from-violet-500 to-fuchsia-400`}
      >
        <div className="App">{children}</div>
      </body>
    </html>
  )
}
