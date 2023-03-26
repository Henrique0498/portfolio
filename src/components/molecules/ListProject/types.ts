import { TypeComponentBadger } from '../../atoms/Badger/types'

export interface TypeComponentListProject {
  list: TypeComponentListProjectList[]
}

export interface TypeComponentListProjectList {
  id: string | number
  title: string
  badgers: TypeComponentListProjectBadgers[]
  date: Date
  repository: string
}

export interface TypeComponentListProjectBadgers extends TypeComponentBadger {
  id: string | number
}

export interface TypeComponentListProjectInfo {
  title: string
  icon: React.ReactNode
}
