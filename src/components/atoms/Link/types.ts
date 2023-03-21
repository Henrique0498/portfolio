import { HtmlHTMLAttributes } from 'react'

export interface TypeComponentLink
  extends HtmlHTMLAttributes<HTMLAnchorElement> {
  children: string | React.ReactNode
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}
