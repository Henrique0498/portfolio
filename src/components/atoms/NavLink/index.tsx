import Link, { LinkProps } from 'next/link'

import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface InNavLink extends LinkProps {
  children: ReactNode
}

export default function NavLink({ ...props }: InNavLink) {
  return <Link {...props} className={styles.container} />
}
