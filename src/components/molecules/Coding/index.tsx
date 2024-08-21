'use client'

import { ComponentPropsWithRef, memo } from 'react'

import styles from './styles.module.scss'
import {
  TyCodeHighlightersLang,
  TyCodeHighlightersTheme
} from '@/services/api/actions/codeHighlighters/type'
import { getCodeHighlighters } from '@/services/api/actions/codeHighlighters/indes'
import { useQuery } from '@tanstack/react-query'
import { ErrorFullScreen } from '@/components/atoms/Error'
import { LoadingFullScreen } from '@/components/atoms/Loading'

export interface InCoding extends ComponentPropsWithRef<'div'> {
  code: string
  lang: TyCodeHighlightersLang
  theme: TyCodeHighlightersTheme
  title: string
  breadcrumbs: string
}

function Coding({
  code,
  className = '',
  lang,
  theme,
  title,
  breadcrumbs,
  ...props
}: InCoding) {
  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ['code-highlighters'],
    queryFn: async () =>
      getCodeHighlighters({
        code: code,
        lang,
        theme
      })
  })

  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <span>{title}</span>
      </div>
      <span className="text-xs text-gray-600 px-4 border-b-1 border-gray-200">
        {breadcrumbs}
      </span>

      {controlRender(isFetching, error, refetch, data)}
    </div>
  )
}

function controlRender(
  loading: boolean,
  error: Error | null,
  refetch: () => void,
  data: string
) {
  if (loading) {
    return (
      <div className="flex-1">
        <LoadingFullScreen label="Estilizando o código..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1">
        <ErrorFullScreen
          handleReloading={refetch}
          label="Error ao estilizar o código"
        />
      </div>
    )
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: data }} className={styles.body} />
  )
}

export default memo(Coding)
