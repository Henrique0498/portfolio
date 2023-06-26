import { Link } from '../../atoms/Link'
import * as S from './styles'

export function NavBar() {
  return (
    <S.Container>
      <ul className="nav_list">
        <li>
          <Link href="#description" color="currentColor">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="#tecnologies" color="currentColor">
            Tecnologias
          </Link>
        </li>
      </ul>
    </S.Container>
  )
}
