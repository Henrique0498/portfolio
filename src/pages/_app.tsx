import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

import './../styles/importTailwind.css'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <NextUIProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </NextUIProvider>
        </ThemeProvider>
      </RecoilRoot>
      <Analytics />
    </>
  )
}
