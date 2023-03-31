import { Button } from '../../atoms/Button'
import { MenuBurger } from '../../atoms/MenuBurger/Index'

import * as S from './styles'

export function Header() {
  return (
    <S._Container>
      <MenuBurger aria-label="Meno do cabeçalho" className="hidden" />
      <Button aria-label="Baixar currículo">Currículo</Button>
    </S._Container>
  )
}
