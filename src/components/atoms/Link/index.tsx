import NextLink from 'next/link'

import { TypeComponentLink } from './types'

import * as S from './styles'

export function Link({
  children,
  color = 'blue',
  ...props
}: TypeComponentLink) {
  return (
    <NextLink {...props}>
      <S._Container color={color}>{children}</S._Container>
    </NextLink>
  )
}
