'use client'

import styles from './styles.module.scss'
import { LoadingFullScreen } from '@/components/atoms/Loading'
import { useQuery } from '@tanstack/react-query'
import { getAllTechnologies } from '@/services/api/actions/technologies'
import { getAllTechnologyEdges } from '@/services/api/actions/technologyEdges'
import { Edge } from 'reactflow'
import { InNodeTechnologies } from '@/services/api/actions/technologies/types'
import { ErrorFullScreen } from '@/components/atoms/Error'
import { Skeleton } from '@nextui-org/react'
import { FlowTechnologyDisplay } from './Flow'
import { useCallback } from 'react'

interface InControRender {
  edges?: Edge[]
  error: Error | null
  loading: boolean
  handleReloading(): void
  nodes?: InNodeTechnologies[]
}

export default function FlowTechnology() {
  const {
    data: nodes,
    error: errorNodes,
    refetch: refetchNodes,
    isFetching: isFetchingNodes
  } = useQuery({
    queryKey: ['nodes'],
    queryFn: getAllTechnologies
  })

  const {
    data: edges,
    error: errorEdges,
    refetch: refetchEdges,
    isFetching: isFetchingEdges
  } = useQuery({
    queryKey: ['edges'],
    queryFn: getAllTechnologyEdges
  })

  const loading = isFetchingNodes || isFetchingEdges
  const error = errorNodes || errorEdges

  const handleReloading = useCallback(() => {
    refetchNodes()
    refetchEdges()
  }, [refetchNodes, refetchEdges])

  return (
    <div className={styles.container}>
      {controlRender({ loading, edges, error: error, handleReloading, nodes })}
    </div>
  )
}

function controlRender({
  edges,
  error,
  handleReloading,
  loading,
  nodes
}: InControRender) {
  if (loading) {
    return <LoadingFullScreen label="Batendo na API" />
  }
  if (error) {
    const message = error?.message || error?.message || 'Error ao bater na API'

    return <ErrorFullScreen handleReloading={handleReloading} label={message} />
  }

  if (nodes && edges) {
    return <FlowTechnologyDisplay edges={edges} nodes={nodes} />
  }

  return (
    <div className="dark h-full w-full ">
      <Skeleton className="h-full w-full rounded-lg opacity-35" />
    </div>
  )
}
