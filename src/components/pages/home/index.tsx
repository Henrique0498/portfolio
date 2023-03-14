import { Welcome } from '../../molecules/Welcome/indesx'
import * as S from './styles'

export function PageHome() {
  return (
    <S._Container className="grid grid-cols-4 gap-4">
      <Welcome className="col-span-4" />
    </S._Container>
  )
}
