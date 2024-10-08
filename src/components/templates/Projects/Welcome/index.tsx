import { ComponentProps } from 'react'

import styles from './styles.module.scss'

interface InMainProjects extends ComponentProps<'section'> {}

export default function Welcome(props: InMainProjects) {
  return (
    <section {...props} className={`${styles.container} min-h-96 gap-4 back`}>
      <div className="container p-4">
        <h2 className="flex flex-col">
          <span className="text-title-7xl text-blue-600">Portfólio</span>
          <span className="text-title-xl">Versão feita em</span>
          <span className="text-title-7xl text-violet-600">React</span>
        </h2>
      </div>
    </section>
  )
}
