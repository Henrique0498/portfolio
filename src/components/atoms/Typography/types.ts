import { ReactNode } from 'react'

export interface TypeComponentTypography {
  type?: TypeTypographyElement
  asComport?: TypeTypographyElement
  className?: string
  children: ReactNode
}

export interface TypeStyledTypography {
  type: TypeTypographyElement
  asComport?: TypeTypographyElement
}

export type TypeTypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'body'
  | 'body-bold'
  | 'body-sm'
  | 'body-xs'
  | 'body-xxs'
  | 'function_text-sm'
  | 'function_text'
  | 'function_text-lg'
