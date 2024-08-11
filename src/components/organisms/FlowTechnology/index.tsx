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

/*

nodesMock.map(async (tech) => {
  const { colors, ...data } = tech
  await postTechnologies(data).then(async ({ id }) => {
    const keys = Object.keys(colors) as (keyof typeof colors)[]

    await keys.map(async (type) => {
      const color = colors[type]
      const result = { idTech: id, color, type }

      await postTechnologyTheme(result)
    })
  })
})


const nodesMock = [
  {
    type: 'main',
    name: 'React',
    icon: 'logos:react',
    description: 'Biblioteca para interfaces.',
    colors: {
      icon: '',
      background:
        'bg-gradient-to-r from-cyan-500 to-violet-500 before:bg-gradient-to-r before:from-cyan-500 before:to-violet-500',
      iconBorder: '',
      buttonLeft: 'text-cyan-500',
      buttonRight: 'text-blue-500'
    },
    positionX: -225,
    positionY: -100
  },
  {
    type: 'main',
    name: 'Vue',
    icon: 'logos:vue',
    description: '',
    colors: {
      icon: 'text-orange-500',
      background:
        'bg-gradient-to-r from-emerald-300 to-sky-700 before:bg-gradient-to-r before:from-emerald-300 before:to-sky-700',
      iconBorder: '',
      buttonLeft: 'text-emerald-500',
      buttonRight: 'text-sky-700'
    },
    positionX: 220,
    positionY: -100
  },
  {
    type: 'default',
    name: 'HTML',
    icon: 'simple-icons:html5',
    colors: {
      icon: 'text-orange-500',
      background: 'bg-gradient-to-r from-orange-300 to-orange-500',
      iconBorder: 'border-orange-500',
      buttonLeft: 'text-orange-300',
      buttonRight: 'text-orange-500'
    },
    positionX: 50,
    positionY: 200
  },
  {
    type: 'default',
    name: 'CSS',
    icon: 'simple-icons:css3',
    colors: {
      icon: 'text-blue-500',
      background: 'bg-gradient-to-r from-blue-300 to-blue-500',
      iconBorder: 'border-blue-500',
      buttonLeft: 'text-blue-300',
      buttonRight: 'text-blue-500'
    },
    positionX: -50,
    positionY: 294
  },
  {
    type: 'default',
    name: 'Styled-Components',
    icon: 'simple-icons:styledcomponents',
    colors: {
      icon: 'text-pink-500',
      background: 'bg-gradient-to-r from-pink-500 to-yellow-300',
      iconBorder: 'border-pink-500',
      buttonLeft: 'text-pink-500',
      buttonRight: 'text-yellow-500'
    },
    positionX: -500,
    positionY: 200
  },
  {
    type: 'default',
    name: 'Sass',
    icon: 'simple-icons:sass',
    colors: {
      icon: 'text-pink-500',
      background: 'bg-gradient-to-r from-pink-300 to-pink-500',
      iconBorder: 'border-pink-500',
      buttonLeft: 'text-pink-300',
      buttonRight: 'text-pink-500'
    },
    positionX: -520,
    positionY: 300
  },
  {
    type: 'default',
    name: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    colors: {
      icon: 'text-teal-500',
      background: 'bg-gradient-to-r from-sky-500 to-teal-500',
      iconBorder: 'border-teal-500',
      buttonLeft: 'text-sky-500',
      buttonRight: 'text-teal-500'
    },
    positionX: 400,
    positionY: 300
  },
  {
    type: 'default',
    name: 'Bootstrap',
    icon: 'simple-icons:bootstrap',
    colors: {
      icon: 'text-violet-500',
      background: 'bg-gradient-to-r from-violet-500 to-purple-500',
      iconBorder: 'border-purple-500',
      buttonLeft: 'text-violet-500',
      buttonRight: 'text-purple-500'
    },
    positionX: 400,
    positionY: 420
  },
  {
    type: 'default',
    name: 'JavaScript',
    icon: 'simple-icons:javascript',
    colors: {
      icon: 'text-yellow-500',
      background: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
      iconBorder: 'border-yellow-500',
      buttonLeft: 'text-yellow-300',
      buttonRight: 'text-yellow-500'
    },
    positionX: -50,
    positionY: -200
  },
  {
    type: 'default',
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
    colors: {
      icon: 'text-blue-500',
      background: 'bg-gradient-to-r from-blue-300 to-blue-500',
      iconBorder: 'border-blue-500',
      buttonLeft: 'text-blue-300',
      buttonRight: 'text-blue-500'
    },
    positionX: 50,
    positionY: -300
  },
  {
    type: 'default',
    name: 'Axios',
    icon: 'simple-icons:axios',
    colors: {
      icon: 'text-purple-500',
      background: 'bg-gradient-to-r from-purple-400 to-purple-600',
      iconBorder: 'border-purple-600',
      buttonLeft: 'text-purple-400',
      buttonRight: 'text-purple-600'
    },
    positionX: 340,
    positionY: -300
  },
  {
    type: 'default',
    name: 'Apollo Graphql',
    icon: 'simple-icons:apollographql',
    colors: {
      icon: 'text-gray-700',
      background: 'bg-gradient-to-r from-gray-500 to-gray-700',
      iconBorder: 'border-gray-600',
      buttonLeft: 'text-gray-500',
      buttonRight: 'text-gray-700'
    },
    positionX: 200,
    positionY: -400
  },
  {
    type: 'default',
    name: 'Graphql',
    icon: 'simple-icons:graphql',
    colors: {
      icon: 'text-pink-500',
      background: 'bg-gradient-to-r from-pink-300 to-pink-500',
      iconBorder: 'border-pink-500',
      buttonLeft: 'text-pink-300',
      buttonRight: 'text-pink-500'
    },
    positionX: 100,
    positionY: -520
  },
  {
    type: 'default',
    name: 'React Query',
    icon: 'simple-icons:reactquery',
    colors: {
      icon: 'text-rose-500',
      background: 'bg-gradient-to-r from-rose-500 to-slate-800',
      iconBorder: 'border-rose-500',
      buttonLeft: 'text-rose-500',
      buttonRight: 'text-slate-800'
    },
    positionX: -465,
    positionY: -400
  },
  {
    type: 'default',
    name: 'Redux',
    icon: 'simple-icons:redux',
    colors: {
      icon: 'text-purple-500',
      background: 'bg-gradient-to-r from-purple-300 to-purple-500',
      iconBorder: 'border-purple-500',
      buttonLeft: 'text-purple-300',
      buttonRight: 'text-purple-500'
    },
    positionX: -465,
    positionY: -120
  },
  {
    type: 'default',
    name: 'React Router',
    icon: 'simple-icons:reactrouter',
    colors: {
      icon: 'text-red-500',
      background: 'bg-gradient-to-r from-red-500 to-red-700',
      iconBorder: 'border-red-500',
      buttonLeft: 'text-red-500',
      buttonRight: 'text-red-700'
    },
    positionX: -465,
    positionY: -240
  },
  {
    type: 'default',
    name: 'NextJS',
    icon: 'simple-icons:nextdotjs',
    colors: {
      icon: 'text-black',
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorder: 'border-blue-500',
      buttonLeft: 'text-blue-500',
      buttonRight: 'text-gray-500'
    },
    positionX: -465,
    positionY: -14
  },
  {
    type: 'default',
    name: 'NextUi',
    icon: 'simple-icons:nextui',
    colors: {
      icon: 'text-black',
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorder: 'border-blue-500',
      buttonLeft: 'text-blue-500',
      buttonRight: 'text-gray-500'
    },
    positionX: -700,
    positionY: -14
  },
  {
    type: 'default',
    name: 'Mui',
    icon: 'simple-icons:mui',
    colors: {
      icon: 'text-blue-500',
      background: 'bg-gradient-to-r from-blue-500 to-blue-800',
      iconBorder: 'border-blue-600',
      buttonLeft: 'text-blue-500',
      buttonRight: 'text-blue-800'
    },
    positionX: -700,
    positionY: -120
  },
  {
    type: 'default',
    name: 'SWR',
    icon: 'simple-icons:swr',
    colors: {
      icon: 'text-black',
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorder: 'border-blue-600',
      buttonLeft: 'text-blue-500',
      buttonRight: 'text-gray-500'
    },
    positionX: -700,
    positionY: 100
  },
  {
    type: 'default',
    name: 'Nuxt',
    icon: 'simple-icons:nuxtdotjs',
    colors: {
      icon: 'text-emerald-500',
      background: 'bg-gradient-to-r from-emerald-500 to-emerald-800',
      iconBorder: 'border-emerald-600',
      buttonLeft: 'text-emerald-500',
      buttonRight: 'text-emerald-800'
    },
    positionX: 480,
    positionY: -14
  },
  {
    type: 'default',
    name: 'NuxtUi',
    icon: 'simple-icons:nuxtdotjs',
    colors: {
      icon: 'text-emerald-500',
      background: 'bg-gradient-to-r from-emerald-500 to-emerald-800',
      iconBorder: 'border-emerald-600',
      buttonLeft: 'text-emerald-500',
      buttonRight: 'text-emerald-800'
    },
    positionX: 720,
    positionY: -14
  },
  {
    type: 'default',
    name: 'Pinia',
    icon: 'logos:pinia',
    colors: {
      icon: '',
      background: 'bg-gradient-to-r from-yellow-500 to-emerald-200',
      iconBorder: 'border-emerald-600',
      buttonLeft: 'text-yellow-500',
      buttonRight: 'text-emerald-800'
    },
    positionX: 720,
    positionY: -204
  }
]*/
