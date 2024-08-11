'use client'
import { memo } from 'react'
import { Handle, Position } from 'reactflow'

import styles from './styles.module.scss'
import { InNodeTechnologiesProps } from '@/components/organisms/FlowTechnology/types'
import { Icon } from '@iconify/react'

function TechnologyNodeMain({ data, xPos }: InNodeTechnologiesProps) {
  const { colors } = data
  const positionTarget = xPos > 0 ? Position.Right : Position.Left
  const positionSource = xPos > 0 ? Position.Left : Position.Right
  const positionTargetStyle = handleStyle(xPos > 0)
  const positionSourceStyle = handleStyle(xPos < 0)

  function handleStyle(value: boolean) {
    if (value) {
      return `${styles.right} ${colors.buttonRight}`
    } else {
      return `${styles.left} ${colors.buttonLeft} ${styles.revert}`
    }
  }

  return (
    <div className={`${styles.background} ${colors.background}`}>
      <div className={styles.node}>
        <div className={styles.header}>
          <Icon icon={data.icon} className={`w-32 h-32 ${colors.icon}`} />
        </div>

        <div className={styles.description}>
          <span>{data.name}</span>
          <p>data.description </p>
        </div>
      </div>

      <Handle
        type="target"
        position={positionTarget}
        className={`${styles.handle} ${positionTargetStyle}`}
      >
        <Icon icon="ic:twotone-circle" className="text-xl" />
      </Handle>

      <Handle
        type="source"
        position={positionSource}
        className={`${styles.handle} ${positionSourceStyle}`}
      >
        <Icon
          icon="ph:flow-arrow-bold"
          className={`text-xl ${styles.handleIcon}`}
        />
      </Handle>
    </div>
  )
}

export default memo(TechnologyNodeMain)
