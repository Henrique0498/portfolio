import { ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'

interface InBadger extends ComponentPropsWithRef<'div'> {
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'violet'
}

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
