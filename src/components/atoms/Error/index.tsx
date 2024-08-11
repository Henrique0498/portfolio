import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

interface InError {
  label: string
  handleReloading(): void
}

export default function Error({ label }: InError) {
  return (
    <div className={styles.container}>
      <div className={styles.containerError}>
        <Icon
          icon="fluent:plug-disconnected-28-regular"
          className={`${styles.icon} text-red-300 text-8xl`}
        />
        <p className="text-red-500 text-8xl font-bold">404</p>
      </div>
      <p>{label}</p>
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
