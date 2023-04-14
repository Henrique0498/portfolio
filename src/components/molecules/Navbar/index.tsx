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
        <li>
          <Link href="#projects" color="currentColor">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="#updates" color="currentColor">
            Atualizações
          </Link>
        </li>
      </ul>
    </S.Container>
  )
}
