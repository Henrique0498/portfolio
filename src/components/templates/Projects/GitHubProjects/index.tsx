'use client'
import { ComponentProps } from 'react'
import { useQuery } from '@tanstack/react-query'

import Error from '@/components/atoms/Error'
import ItemProject from './ItemProject'
import Loading from '@/components/atoms/Loading'
import { getGithubRepos } from '@/services/api/actions/github'

import styles from './styles.module.scss'

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
          {loading &&
            Array.from({ length: 12 }, (_, index) => (
              <Loading
                label="Carregando projetos..."
                className="h-48 shadow-md bg-white border border-gray-200 rounded-md"
                key={index}
              />
            ))}
          {error &&
            Array.from({ length: 12 }, (_, index) => (
              <Error
                label="Erro ao carregar tecnologia"
                className="h-48 shadow-md bg-white border border-gray-200 rounded-md"
                key={index}
              />
            ))}
          {data?.map((project, i) => (
            <ItemProject
              key={`${i}-${project.name}-${project.id}`}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
