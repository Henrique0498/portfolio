import * as S from './styles'
import { TypeButton } from './types'



export function Button ({children, ...props}: TypeButton) {
  return (
    <S._Container {...props}>{children}</S._Container>
  )
}
