import { CardProps } from '@nextui-org/react'
import { TypeUrl } from 'types/basic'

export interface TypeComponentCard extends Omit<CardProps, 'children'> {
  title: string
  subtitle?: string
  image: {
    item: TypeUrl
    background: TypeUrl
  }
}

export interface TypeStyledCardBody {
  imageBackground: TypeUrl
}
