import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'

import './../styles/importTailwind.css'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  )
}
