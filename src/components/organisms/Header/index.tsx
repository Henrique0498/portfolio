'use client'

import { ComponentPropsWithRef, useEffect, useState } from 'react'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'

import Logo from '@/components/molecules/Logo'
import NavLink from '@/components/atoms/NavLink'

import styles from './styles.module.scss'
import Link from 'next/link'

interface InHeader extends ComponentPropsWithRef<'header'> {}

const menuItems = [
  {
    id: 'homepage',
    children: 'Pagina inicial',
    href: '/'
  },
  {
    id: 'project',
    children: 'Projetos',
    href: '/projects'
  },
  {
    id: 'linkedIn',
    children: 'Linkedin',
    href: 'https://www.linkedin.com/in/henrique-ls/',
    target: '_blank'
  },
  {
    id: 'vue',
    children: 'Versão em Vue',
    href: 'https://vue.henriquelopes.dev.br',
    target: '_blank'
  }
]

export default function Header({ className = '', ...props }: InHeader) {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = window.scrollY

      setIsScroll(scrollHeight > 0)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      {...props}
      onMenuOpenChange={setIsMenuOpen}
      className={`${styles.container} ${isScroll ? styles.headerDark : ''} h-20 ${className}`}
    >
      <div className={styles.headerBody}>
        <Link href="/">
          <Logo />
        </Link>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />

        <nav className={`${styles.nav} hidden md:flex `}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <NavbarMenu className={isScroll ? styles.sideDark : styles.sidelight}>
        {menuItems.map(({ ...props }) => (
          <NavbarMenuItem key={props.id} className={styles.sideList}>
            <NavLink className="w-full" {...props} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
