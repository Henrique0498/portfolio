'use client'

import React, { ReactNode, memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import styles from './styles.module.scss'

interface InTechnologyItem extends NodeProps {
  data: TyTechnologyItemData
}

export type TyTechnologyItemData = {
  title: string
  background: string
  icon: ReactNode
  iconBorderColor: string
  buttonLeftColor: string
  buttonRightColor: string
}

function TechnologyItem({ data, xPos }: InTechnologyItem) {
  return (
    <div className={`${styles.background} ${data.background}`}>
      <div
        className={`${styles.container} ${xPos > 0 ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className={`${styles.icon} ${data.iconBorderColor}`}>
          {data.icon}
        </div>
        <div className={styles.description}>
          <span>{data.title}</span>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className={`${styles.handle} ${styles.left} ${data.buttonLeftColor}`}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={`${styles.handle} ${styles.right} ${data.buttonRightColor}`}
      />
    </div>
  )
}

export default memo(TechnologyItem)
