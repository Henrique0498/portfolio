import { TyBadgerColor } from '@/components/atoms/Badger'

export interface InGetProjectsMain {
  title: string
  description: string
  link: string
  colors: {
    background: string
    iconBackground: string
  }
  icon: string
  technologies: {
    color: TyBadgerColor
    children: string
  }[]
}
