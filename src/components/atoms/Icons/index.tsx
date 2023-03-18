import React from 'react'
import { IconsFiles } from './files'
import { TypeComponentIcon } from './types'

export function Icon({ icon, ...props }: TypeComponentIcon) {
  return <i {...props}>{IconsFiles[icon]}</i>
}
