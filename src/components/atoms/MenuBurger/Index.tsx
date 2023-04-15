import { useRecoilState } from 'recoil'

import * as S from './styles'

import { TypeComponentMenuBurger } from './types'
import { storeSidebarVisible } from '../../../storage/sidebar'

export function MenuBurger(props: TypeComponentMenuBurger) {
  const [visibleSidebar, setVisibleSide] = useRecoilState(storeSidebarVisible)

  return (
    <S._Container
      onClick={() => setVisibleSide((value) => !value)}
      active={visibleSidebar}
      {...props}
    >
      <span className="container_icon" />
      <span className="menu-text_visible">Menu</span>
    </S._Container>
  )
}
