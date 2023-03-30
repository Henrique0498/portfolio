import * as S from './styles'

import { TypeComponentMenuBurger } from './types'

export function MenuBurger(props: TypeComponentMenuBurger) {
  return (
    <S._Container {...props}>
      <span className="menu-text_visible">Menu</span>
    </S._Container>
  )
}
