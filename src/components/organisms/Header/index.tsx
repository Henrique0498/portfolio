import { Button } from '../../atoms/Button'
import { MenuBurger } from '../../atoms/MenuBurger/Index'
import * as S from './styles'

export function Header() {
  return (
    <S._Container>
      <MenuBurger />
      <Button aria-label="Baixar currículo">Currículo</Button>
    </S._Container>
  )
}