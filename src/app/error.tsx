'use client'

import Error from '@/components/templates/Error'

interface InErrorPage {
  reset(): void
  error: Error
}

export default function ErrorPage({ error, reset }: InErrorPage) {
  return <Error error={error} tryAgain={reset} />
}
