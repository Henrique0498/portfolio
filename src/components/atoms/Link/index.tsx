import NextLink from 'next/link'

import { ComponentProps } from 'react'
import styles from './styles.module.scss'

interface InLink extends ComponentProps<'a'> {
  href: string
}

export default function Link({ className, ...props }: InLink) {
  return <NextLink {...props} className={`${styles.container} ${className}`} />
}
