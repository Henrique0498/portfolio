import React from 'react'

import { Image } from 'components/atoms/Image'

import * as S from './styles'

import { TypeComponentCard } from './types'
import { Typography } from 'components/atoms/Typography'

export function Card({ title, subtitle, image, ...props }: TypeComponentCard) {
  return (
    <S._Container {...props}>
      <S._Body imageBackground={image.background}>
        <div className="container_info">
          <Typography type="h5">{title}</Typography>

          {subtitle && <Typography type="body-sm">{subtitle}</Typography>}
        </div>
        <div className="container_image">
          <Image
            src={image.item}
            alt={`imagem do card ${title}`}
            className="image"
            width="4.25rem"
            height="4.25rem"
          />
        </div>
      </S._Body>
    </S._Container>
  )
}
