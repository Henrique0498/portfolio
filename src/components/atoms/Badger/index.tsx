import { ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'

interface InBadger extends ComponentPropsWithRef<'div'> {
  color?: TyBadgerColor
}

export type TyBadgerColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'gray'
  | 'violet'
  | 'pink'

export default function Badger({
  className = '',
  color = 'violet',
  children,
  ...props
}: InBadger) {
  return (
    <div
      {...props}
      className={`${styles.container} textBodySm ${className}`}
      color={color}
    >
      {children}
    </div>
  )
}
