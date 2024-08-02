import { Node } from 'reactflow'

interface InResponseColors {
  background: string
  buttonLeft: string
  buttonRight: string
  icon: string
  iconBorder: string
}

export interface InResponseTechnologies {
  id: string
  name: string
  type: string
  icon: string
  colors: InResponseColors
  position: {
    x: number
    y: number
  }
}

export interface InNodeTechnologies extends Node<InNodeTechnologiesData> {}

export interface InNodeTechnologiesData {
  name: string
  icon: string
  colors: InResponseColors
}

export interface InPostDataTechnology {
  name: string
  type: string
  icon: string
  positionY: number
  positionX: number
}
