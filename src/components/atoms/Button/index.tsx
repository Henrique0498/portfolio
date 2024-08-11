'use client'

import { ComponentProps, MouseEvent, ReactNode, useRef } from 'react'

import styles from './styles.module.scss'

import { Icon } from '@iconify/react'
import Tooltip from '../Tooltip'

interface InButton extends ComponentProps<'button'> {
  icon?: string
  children: ReactNode
  color?: 'primary' | 'light'
}

interface InButtonIcon extends Omit<InButton, 'children'> {
  icon: string
  content: string
  children?: ReactNode
}

type TyNativeEvent = {
  offsetY: number
  offsetX: number
}

interface InEvent extends MouseEvent<HTMLButtonElement> {
  nativeEvent: MouseEvent<HTMLButtonElement>['nativeEvent'] & TyNativeEvent
}

export default function Button({
  icon,
  children,
  content,
  color = 'primary',
  className = '',
  onClick,
  disabled,
  ...props
}: InButton | InButtonIcon) {
  const refButton = useRef<HTMLButtonElement>(null)
  let timeRemoveClass: NodeJS.Timeout
  const isIcon = content ? styles.icon : ''
  const styleColor = styles[color]

  function handleAnimation(event: InEvent) {
    removeClass()
    clearTimeout(timeRemoveClass)
    const x = event.nativeEvent.offsetX
    const y = event.nativeEvent.offsetY

    refButton.current!.style.setProperty('--click-x', `${x}px`)
    refButton.current!.style.setProperty('--click-y', `${y}px`)
    refButton.current!.classList.add(styles.animationCircle)

    timeRemoveClass = setTimeout(removeClass, 400)
  }

  function removeClass() {
    refButton.current?.classList.remove(styles.animationCircle)
  }

  function handleClick(e: InEvent) {
    if (!disabled) {
      handleAnimation(e)

      onClick && onClick(e)
    }
  }

  return (
    <Tooltip content={content}>
      <button
        {...props}
        className={`${styles.content} ${isIcon} ${styleColor} ${disabled ? styles.disabled : ''} ${className}`}
        onClick={handleClick}
        ref={refButton}
      >
        {icon && <Icon icon={icon} className="w-5 h-5" />}

        {icon && <span className={styles.labelIcon}>{content}</span>}

        {children && <span>{children}</span>}
      </button>
    </Tooltip>
  )
}
