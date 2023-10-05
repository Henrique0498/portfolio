import { useRef, useEffect } from 'react'

import { MenuBurger } from '../../atoms/MenuBurger/Index'
import { LogoHeader } from '../../molecules/LogoHeader'
import { NavBar } from '../../molecules/Navbar'

import { handleScroll } from '../../../utils/handleScroll'

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
      <div className="container_nav max-w-screen-2xl mx-auto">
        <MenuBurger aria-label="Meno do cabeçalho" className="hidden" />

        <LogoHeader />

        <NavBar />
      </div>
    </S._Container>
  )
}
