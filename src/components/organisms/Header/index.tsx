import { Button } from '../../atoms/Button'
import { MenuBurger } from '../../atoms/MenuBurger/Index'
import * as S from './styles'

export function Header() {
  return (
    <S._Container>
      <MenuBurger />
      <Button >curriculo</Button>
    </S._Container>
  )
}
