'use client'

import { ComponentPropsWithRef, useEffect, useRef } from 'react'
import { MutableRefObject } from 'react'

import Logo from '@/components/molecules/Logo'
import NavLink from '@/components/atoms/NavLink'

import styles from './styles.module.scss'

interface InHeader extends ComponentPropsWithRef<'header'> {}

export default function Header({ className = '', ...props }: InHeader) {
  const refHeader = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll(refHeader))

    return () => {
      window.removeEventListener('scroll', handleScroll(refHeader))
    }
  }, [])

  return (
    <header
      {...props}
      className={`${styles.container} ${className}`}
      ref={refHeader}
    >
      <div className={`${styles.headerBody} container mainContainer`}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                href={'https://www.linkedin.com/in/henrique-ls/'}
                target="_blank"
              >
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink href={'/'}>Projetos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function handleScroll(
  element: MutableRefObject<HTMLHeadElement | null>
) {
  return () => {
    const scrollHeight = window.scrollY
    const isSmall = element.current?.getAttribute('scroll') === 'true'

    if (scrollHeight > 0 && !isSmall) {
      element.current?.setAttribute('scroll', 'true')
    } else if (isSmall && scrollHeight === 0) {
      element.current?.setAttribute('scroll', 'false')
    }
  }
}
