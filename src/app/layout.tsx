import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import {
  font_type_coding,
  font_type_primary,
  font_type_secondary
} from '@/functions/fonts'

import '@/styles/global.scss'
import { ClientProviders } from './providers'

export const metadata: Metadata = {
  title: 'Henrique Lopes',
  description: 'Portfólio de Henrique Lopes'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body
        className={`${font_type_primary.variable} ${font_type_secondary.variable} ${font_type_coding.variable}`}
      >
        <ClientProviders>
          <div className="App">
            <Header />
            <div className="AppBody">{children}</div>
            <Footer />
          </div>
        </ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
