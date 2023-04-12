import { Link } from '../../atoms/Link'
import { MenuBurger } from '../../atoms/MenuBurger/Index'
import { LogoHeader } from '../../molecules/LogoHeader'

import * as S from './styles'

export function Header() {
  return (
    <S._Container>
      <MenuBurger aria-label="Meno do cabeçalho" className="hidden" />

      <LogoHeader />

      <S._Nav>
        <ul className="nav_list">
          <li>
            <Link href="#description">Sobre</Link>
          </li>
          <li>
            <Link href="#tecnologies">Tecnologias</Link>
          </li>
          <li>
            <Link href="#projects">Projetos</Link>
          </li>
          <li>
            <Link href="#updates">Atualizações</Link>
          </li>
        </ul>
      </S._Nav>
    </S._Container>
  )
}
