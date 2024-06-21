'use client'

import IconReact from '@/components/atoms/IconReact'
import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'

import styles from './styles.module.scss'
import IconVue from '@/components/atoms/IconVue'

interface InTechnologyItemMain {
  data: TyTechnologyItemMainData
}

export type TyTechnologyItemMainData = 'React' | 'Vue'

const config = {
  React: {
    class: 'react',
    title: 'React',
    icon: <IconReact />,
    desc: 'Biblioteca para interfaces.'
  },
  Vue: {
    class: 'vue',
    icon: <IconVue />,
    title: 'Vue',
    desc: 'Framework para interfaces.'
  }
}

function TechnologyItemMain({ data }: InTechnologyItemMain) {
  const result = config[data]

  return (
    <div className={`${styles.background} ${styles[result.class]}`}>
      <div className={styles.container}>
        <div className={styles.header}>{result.icon}</div>

        <div className={styles.description}>
          <h6>{result.title}</h6>
          <p>{result.desc}</p>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className={`${styles.handle} ${styles.left} ${styles[result.class]}`}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={`${styles.handle} ${styles.right} ${styles[result.class]}`}
      />
    </div>
  )
}

export default memo(TechnologyItemMain)
