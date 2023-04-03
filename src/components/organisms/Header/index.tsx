import { MenuBurger } from '../../atoms/MenuBurger/Index'
import { LogoHeader } from '../../molecules/LogoHeader'

import * as S from './styles'

export function Header() {
  return (
    <S._Container>
      <MenuBurger aria-label="Meno do cabeçalho" className="hidden" />

      <LogoHeader />
    </S._Container>
  )
}
