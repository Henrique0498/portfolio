import { Icon } from '@iconify/react'
import { ComponentPropsWithRef } from 'react'

import styles from './styles.module.scss'
import Button from '../Button'

interface InError extends ComponentPropsWithRef<'div'> {
  label: string
  handleReloading?(): void
}

export default function Error({
  label,
  className = '',
  handleReloading,
  ...props
}: InError) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.containerError}>
        <Icon
          icon="fluent:plug-disconnected-28-regular"
          className={`${styles.icon} text-red-300 text-8xl`}
        />
        <p className="text-red-500 text-8xl font-bold">404</p>
      </div>
      <p>{label}</p>
      {handleReloading && (
        <Button onClick={() => handleReloading()} className="mt-4">
          Tentar de Novo
        </Button>
      )}
    </div>
  )
}

export function ErrorFullScreen({ ...props }: InError) {
  return (
    <div className="h-full w-full flex items-center justify-center full">
      <Error {...props} />
    </div>
  )
}
