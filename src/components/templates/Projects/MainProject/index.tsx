'use client'

import { ComponentProps } from 'react'

import Project from './Project'
import { useQuery } from '@tanstack/react-query'
import { getProjectsMain } from '@/services/api/actions/projectsMain'
import { ErrorFullScreen } from '@/components/atoms/Error'

import styles from './styles.module.scss'

interface InMainProjects extends ComponentProps<'section'> {}

export default function MainProject(props: InMainProjects) {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ['projectsMain'],
    queryFn: getProjectsMain
  })
  const loading = isFetching && !data

  if (error) {
    return (
      <section className="min-h-60 container -m-40">
        <ErrorFullScreen
          label="Erro ao buscar projetos"
          handleReloading={refetch}
        />
      </section>
    )
  }

  return (
    <section {...props} className={`${styles.container} container`}>
      {loading &&
        Array.from({ length: 3 }, (_, i) => <Project key={i} isLoading />)}

      {data?.map((item, i) => <Project key={`${i}-${item.title}`} {...item} />)}
    </section>
  )
}
