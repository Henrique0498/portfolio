import { HtmlHTMLAttributes } from 'react'

export interface TypeComponentImage extends HtmlHTMLAttributes<HTMLDivElement> {
  alt: string
  height?: string
  objectFit?: ObjectFit
  src: string
  width?: string
}

export interface TypeComponentImageStyled {
  width: string
  height: string
  objectFit: ObjectFit
}

type ObjectFit = 'cover' | 'contain' | 'fill' | 'none'
