import { ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'
import { Icon } from '@iconify/react'

interface InLoading extends ComponentPropsWithRef<'div'> {
  label?: string
  size?: keyof typeof sizes
  color?: keyof typeof colors
}

const sizes = {
  sm: 'text-3xl',
  md: 'text-5xl',
  lg: 'text-7xl'
}

const colors = {
  primary: 'text-blue-500',
  secondary: 'text-purple-500',
  success: 'text-green-500',
  warning: 'text-yellow-600',
  danger: 'text-red-500'
}

export default function Loading({
  label,
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}: InLoading) {
  const sizeResult = sizes[size]
  const colorResult = colors[color]

  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <Icon
        icon="eos-icons:loading"
        className={`${sizeResult} ${colorResult}`}
      />
      <p>{label}</p>
    </div>
  )
}

export function LoadingFullScreen({ ...props }: InLoading) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loading {...props} />
    </div>
  )
}
