import { Roboto, Poppins, Fira_Code } from 'next/font/google'

export const font_type_primary = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-type-primary',
  display: 'swap'
})

export const font_type_secondary = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin-ext'],
  variable: '--font-type-secondary',
  display: 'swap'
})

export const font_type_coding = Fira_Code({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-type-coding',
  display: 'swap'
})
