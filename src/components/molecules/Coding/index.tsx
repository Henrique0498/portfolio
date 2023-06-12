import { TypeComponentCoding } from './types'

import * as S from './styles'

export function Coding({ code, ...props }: TypeComponentCoding) {
  return (
    <S._Container {...props}>
      <S._Header />
      <S._Body
        dangerouslySetInnerHTML={{ __html: code }}
        className="inset-0 leading-relaxed"
      />
    </S._Container>
  )
}
