import * as S from './styles'
import { TypeComponentBadger } from './types'

export function Badger ({children}: TypeComponentBadger) {
  return (
    <S._Container>{children}</S._Container>
  )
}
