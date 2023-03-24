import { TypeComponentBadger } from './types'

import * as S from './styles'

export function Badger({ children, color = 'blue' }: TypeComponentBadger) {
  return <S._Container color={color}>{children}</S._Container>
}
