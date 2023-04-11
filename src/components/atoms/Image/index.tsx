import NextImage from 'next/image'

import * as S from './styles'
import { TypeComponentImage } from './types'

export function Image({
  alt,
  height = '100%',
  objectFit = 'cover',
  src,
  width = '100%',
  ...props
}: TypeComponentImage) {
  return (
    <S._Container
      height={height}
      objectFit={objectFit}
      width={width}
      {...props}
    >
      <NextImage src={src} alt={alt} fill sizes='100%, 100%' />
    </S._Container>
  )
}
