import { ComponentPropsWithoutRef } from 'react'

import styles from './styles.module.scss'

interface InIconVue extends ComponentPropsWithoutRef<'div'> {}

export default function IconVue(props: InIconVue) {
  return (
    <div {...props} className={styles.container}>
      <div className={styles.green}></div>
      <div className={styles.blue}></div>
    </div>
  )
}
