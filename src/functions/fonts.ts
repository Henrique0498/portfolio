import { Roboto, Poppins } from 'next/font/google'

export const font_type_primary = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-type-primary',
  display: 'swap'
})

export const font_type_secondary = Poppins({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-type-secondary',
  display: 'swap'
})
