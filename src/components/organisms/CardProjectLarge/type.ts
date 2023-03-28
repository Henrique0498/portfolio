import { HtmlHTMLAttributes } from 'react'
import { TypeComponentBadger } from '../../atoms/Badger/types'

export interface TypeComponentCardProjectLarge extends HtmlHTMLAttributes<HTMLDivElement>{
  title: string
  date: Date
  repository: {
    src: string
  }
  image: {
    background: {
      src: string
    }
    icon: {
      src: string
    }
  }
  badgers: TypeComponentCardProjectLargeBadgers[]
}

export interface TypeComponentCardProjectLargeBadgers
  extends TypeComponentBadger {
  id: string | number
}
