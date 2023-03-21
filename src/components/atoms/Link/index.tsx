import NextLink from 'next/link'

import { TypeComponentLink } from './types'

import * as S from './styles'

export function Link({ children, ...props }: TypeComponentLink) {
  return (
    <NextLink {...props}>
      <S._Container>{children}</S._Container>
    </NextLink>
  )
}
