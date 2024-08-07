import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Tooltip from '../Tooltip'

interface InIconLink extends ComponentProps<'a'> {
  content: string
  href: string
  icon: string
}

export default function IconLink({
  content,
  icon,
  className = '',
  ...props
}: InIconLink) {
  return (
    <Tooltip content={content}>
      <Link {...props} className={`${styles.container} ${className}`}>
        <Icon icon={icon} />
        <span className="opacity-0 w-0 h-0 overflow-hidden">{content}</span>
      </Link>
    </Tooltip>
  )
}
