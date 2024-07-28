'use client'
import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Icon } from '@iconify/react'

import { InNodeTechnologiesProps } from '@/components/organisms/FlowTechnology/types'

import styles from './styles.module.scss'

function TechnologyNodeDefault({ data, xPos }: InNodeTechnologiesProps) {
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
    <div className={`${styles.background} ${data.colors.background}`}>
      <div
        className={`${styles.container} ${xPos > 0 ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className={`${styles.icon} ${data.colors.iconBorder}`}>
          <Icon icon={data.icon} className={data.colors.icon} />
        </div>

        <div className={styles.description}>
          <span>{data.name}</span>
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

export default memo(TechnologyNodeDefault)
