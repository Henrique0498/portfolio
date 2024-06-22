import { ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'

interface InLoading extends ComponentPropsWithRef<'div'> {
  title?: string
  size?: keyof typeof sizes
  color?: keyof typeof colors
}

const sizes = {
  sm: '32px',
  md: '48px',
  lg: '64px'
}

const colors = {
  primary: 'text-blue-500',
  secondary: 'text-purple-500',
  success: 'text-green-500',
  warning: 'text-yellow-600',
  danger: 'text-red-500'
}

export default function Loading({
  title,
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}: InLoading) {
  const sizeResult = sizes[size]
  const colorResult = colors[color]

  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <svg
        version="1.1"
        id="loader-1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={colorResult}
        width={sizeResult}
        height={sizeResult}
        viewBox="0 0 50 50"
        xmlSpace="preserve"
      >
        <path
          fill="currentColor"
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur=".7s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <p>{title}</p>
    </div>
  )
}
