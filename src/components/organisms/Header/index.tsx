import { useRef, MutableRefObject, useEffect } from 'react'
import { MenuBurger } from '../../atoms/MenuBurger/Index'
import { LogoHeader } from '../../molecules/LogoHeader'
import { NavBar } from '../../molecules/Navbar'

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

function handleScroll(element: MutableRefObject<HTMLHeadElement>) {
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
