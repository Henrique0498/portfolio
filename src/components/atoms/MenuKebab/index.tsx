import React from 'react'
import { TypeComponentMenuKebab } from './types'

import * as S from './styles'

export const MenuKebab = ({ title, ...props }: TypeComponentMenuKebab) => {
  return (
    <S._Container {...props} aria-label={title}>
      <span className="menu-text_visible">{title}</span>
    </S._Container>
  )
}
