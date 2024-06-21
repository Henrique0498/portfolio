import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

interface InIconReact extends ComponentPropsWithoutRef<'div'> {}

export default function IconReact({ className = '', ...props }: InIconReact) {
  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  )
}
