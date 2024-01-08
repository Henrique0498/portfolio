import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './styles/global.scss'

export interface IRootLayout {
  children: React.ReactNode
}

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Henrique Lopes',
  description: 'Portfólio de Henrique Lopes'
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
