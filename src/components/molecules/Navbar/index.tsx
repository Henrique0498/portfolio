import { Link } from '../../atoms/Link'
import * as S from './styles'

export function NavBar(){
  return (
    <S.Container>
      <ul className="nav_list">
        <li>
          <Link href="#description" className='list_link'>Sobre</Link>
        </li>
        <li>
          <Link href="#tecnologies" className='list_link'>Tecnologias</Link>
        </li>
        <li>
          <Link href="#projects" className='list_link'>Projetos</Link>
        </li>
        <li>
          <Link href="#updates" className='list_link'>Atualizações</Link>
        </li>
      </ul>
    </S.Container>)
}
