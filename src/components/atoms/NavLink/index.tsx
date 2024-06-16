import Link from 'next/link'

import { ComponentPropsWithRef, ReactNode } from 'react'

import styles from './styles.module.scss'

interface InNavLink extends ComponentPropsWithRef<'a'> {
  children: ReactNode
  href: string
}

export default function NavLink({ ...props }: InNavLink) {
  return <Link {...props} className={styles.container} />
}
