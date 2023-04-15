import { useRef, useEffect } from 'react'

import { MenuBurger } from '../../atoms/MenuBurger/Index'
import { LogoHeader } from '../../molecules/LogoHeader'
import { NavBar } from '../../molecules/Navbar'

import { handleScroll } from '../../../util/handleScroll'

import * as S from './styles'

export function Header() {
  const refHeader = useRef<HTMLHeadElement | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll(refHeader))

    return () => {
      window.removeEventListener('scroll', handleScroll(refHeader))
    }
  }, [])

  return (
    <S._Container ref={refHeader}>
      <MenuBurger aria-label="Meno do cabeçalho" className="hidden" />

      <LogoHeader />

      <NavBar />
    </S._Container>
  )
}
