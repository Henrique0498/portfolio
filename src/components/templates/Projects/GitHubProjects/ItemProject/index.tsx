'use client'

import styles from './styles.module.scss'
import { ComponentProps } from 'react'
import IconLink from '@/components/atoms/IconLink'
import { InGetGitHubRepository } from '@/services/api/actions/github/types'

interface InItemProject
  extends Omit<InGetGitHubRepository, 'id'>,
    ComponentProps<'div'> {}

export default function ItemProject({
  description,
  className = '',
  html_url,
  language,
  name
}: InItemProject) {
  return (
    <div
      className={`${styles.card} ${className} shadow-md bg-white border border-gray-200`}
    >
      <div className={styles.badgers}>
        <IconLink
          href={html_url}
          content="Ir para o projeto"
          icon="hugeicons:link-square-02"
          className="bg-white/50 hover:text-blue-600 hover:bg-white"
          target="_blank"
        />
      </div>

      <div className={styles.header}>
        <span className="px-4 py-2 rounded-lg bg-white">
          <h4 className="text-gray-900 truncate decoration-square text-title-lg">
            {name.replace(/[-_]/gm, ' ')}
          </h4>
        </span>
      </div>

      <div className={`${styles.body} bg-white after:shadow-white`}>
        {language}
      </div>

      <div className={`${styles.footer} bg-white truncate text-gray-800`}>
        {description}
      </div>
    </div>
  )
}
