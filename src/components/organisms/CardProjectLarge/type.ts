import { TypeSystemColors } from "../../../types/theme"

export interface TypeComponentCardProjectLarge {
  title: string
  date: Date
  repository: {
    src: string
  }
  image: {
    background: {
      src: string
    }
    icon:{
      src: string
    }
  }
  badgers: TypeBadgers[]
}

type TypeBadgers = {
  title: string
  color: TypeSystemColors
}
