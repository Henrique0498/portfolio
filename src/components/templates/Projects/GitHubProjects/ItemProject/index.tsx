'use client'

import styles from './styles.module.scss'
import { ComponentProps } from 'react'
import IconLink from '@/components/atoms/IconLink'
import { InGetGitHubRepository } from '@/services/api/actions/github/types'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

interface InItemProject
  extends Omit<InGetGitHubRepository, 'id'>,
    ComponentProps<'div'> {}

export default function ItemProject({
  description,
  html_url,
  language,
  name
}: InItemProject) {
  return (
    <div
      className={`${styles.card} shadow-md bg-white border border-gray-200`}
      style={{
        backgroundImage: `url(${baseUrl}/v1/image/texts?text=${language}&opacity=0.3&color=e2e8f0)`
      }}
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

      <div className={`${styles.header} bg-white after:shadow-white`}>
        <h4 className="text-gray-900 truncate">{name.replaceAll('-', ' ')}</h4>
      </div>
      <div className={`${styles.body} bg-white truncate text-gray-800`}>
        {description}
      </div>
    </div>
  )
}
