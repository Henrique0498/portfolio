import { HTMLAttributes, MutableRefObject } from 'react'

export type TypeWelcome = HTMLAttributes<HTMLDivElement>

export type TypeControlRenderText = {
  idTimeoutArray: NodeJS.Timeout[]
  ref: MutableRefObject<HTMLSpanElement>
  initialValue: string
  texts: string[]
  indexByArray?: number
  typeFunction?: boolean
  count?: number
  timeMs?: number
  timeMsFinal?: number
  timeMsResult?: number
}
