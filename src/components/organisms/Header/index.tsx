import { MenuBurger } from '../../atoms/MenuBurger/Index'
import * as S from './styles'

export function Header() {
  return (
    <S._Container className="grid grid-cols-4 gap-4">
      <MenuBurger />
    </S._Container>
  )
}
