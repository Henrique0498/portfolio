'use client'

import { ReactQueryProviders } from '@/libs/ReactQuery'
import { NextUIProvider } from '@nextui-org/react'
import { PropsWithChildren } from 'react'

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <ReactQueryProviders>{children}</ReactQueryProviders>
    </NextUIProvider>
  )
}
