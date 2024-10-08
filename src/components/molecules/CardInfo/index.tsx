import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import { Icon } from '@iconify/react'

interface InCardInfo extends ComponentProps<'div'> {
  title: string
  icon: string
}

export default function CardInfo({
  className = '',
  title,
  icon,
  children,
  ...props
}: InCardInfo) {
  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <Icon icon={icon} className="w-9 h-9 mb-1" />

      <h3 className="text-title-md">{title}</h3>

      <p className="opacity-80">{children}</p>
    </div>
  )
}
