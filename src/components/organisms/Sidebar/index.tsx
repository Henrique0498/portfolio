import { useRecoilValue } from 'recoil'
import { useRef, useEffect, memo } from 'react'

import { storeSidebarVisible } from '../../../storage/sidebar'

import * as S from './styles'
import { handleScroll } from '../../../utils/handleScroll'
import Link from 'next/link'

export function Sidebar() {
  const visibleSidebar = useRecoilValue(storeSidebarVisible)

  const refAside = useRef<HTMLElement | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll(refAside))

    return () => {
      window.removeEventListener('scroll', handleScroll(refAside))
    }
  }, [])

  return (
    <S._Container isVisible={visibleSidebar} ref={refAside}>
      <List />
    </S._Container>
  )
}

const List = memo(function List() {
  return (
    <S._List>
      <li>
        <Link href="#description">Sobre</Link>
      </li>
      <li>
        <Link href="#tecnologies">Tecnologias</Link>
      </li>
    </S._List>
  )
})
