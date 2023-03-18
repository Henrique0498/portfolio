import { HtmlHTMLAttributes } from 'react'
import { IconsFiles } from './files'

type TypeKeyIcon = keyof typeof IconsFiles

export interface TypeComponentIcon extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: TypeKeyIcon
}
