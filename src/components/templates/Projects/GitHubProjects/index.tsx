'use client'
import { ComponentProps } from 'react'
import { useQuery } from '@tanstack/react-query'

import Error from '@/components/atoms/Error'
import ItemProject from './ItemProject'
import Loading from '@/components/atoms/Loading'
import { getGithubRepos } from '@/services/api/actions/github'

import styles from './styles.module.scss'
import { InGetGitHubRepository } from '@/services/api/actions/github/types'

interface InMainProjects extends ComponentProps<'section'> {}

export default function GitHubProjects(props: InMainProjects) {
  const { data, error, isFetching } = useQuery({
    queryKey: ['github-repos'],
    queryFn: () => getGithubRepos()
  })
  const loading = isFetching && !data

  return (
    <section {...props} className={styles.section}>
      <div
        className={`${styles.container} container bg-white border border-gray-200`}
      >
        <div>
          <h2 className="text-title-7xl decoration-square after:text-blue-500">
            GitHub
          </h2>
          <span>Meus últimos 12 projetos.</span>
        </div>

        <div className={`${styles.projects} ${loading ? styles.loading : ''}`}>
          {controlRender(loading, error, data)}
        </div>
      </div>
    </section>
  )
}

function controlRender(
  loading: boolean,
  error: Error | null,
  data: InGetGitHubRepository[] = Array.from({ length: 12 })
) {
  if (loading) {
    return data.map((_, i) => (
      <Loading
        label="Carregando projetos..."
        className="h-48 shadow-md bg-white border border-gray-200 rounded-md"
        key={i}
      />
    ))
  }

  if (error) {
    return data.map((_, i) => (
      <Error
        label="Erro ao carregar tecnologia"
        className="h-48 shadow-md bg-white border border-gray-200 rounded-md flex items-center"
        key={i}
      />
    ))
  }

  return data.map((project, i) => (
    <ItemProject
      key={`${i}-${project.name}-${project.id}`}
      className={styles.card}
      {...project}
    />
  ))
}
