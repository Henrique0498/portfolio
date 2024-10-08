import { ComponentProps } from 'react'

import styles from './styles.module.scss'
import { Icon } from '@iconify/react'
import Badger from '@/components/atoms/Badger'
import { InGetProjectsMain } from '@/services/api/actions/projectsMain/types'
import Skeleton from '@/components/atoms/Skeleton'
import IconLink from '@/components/atoms/IconLink'

interface InProject
  extends Omit<ComponentProps<'div'>, 'title'>,
    InGetProjectsMain {}

interface InProjectLoading {
  isLoading: boolean
}

export default function Project(props: InProject | InProjectLoading) {
  if ('isLoading' in props) {
    return (
      <div
        className={`${styles.container} bg-gradient-to-tr from-slate-50 via-gray-50 to-slate-200 gap-4 shadow-md`}
      >
        <div className="flex gap-4 items-center">
          <Skeleton className="rounded">
            <div className="w-10 h-10" />
          </Skeleton>

          <Skeleton className="rounded">
            <div className="w-24 h-6" />
          </Skeleton>
        </div>

        <div className="flex-1">
          <Skeleton className="rounded">
            <div className="w-6 h-6" />
          </Skeleton>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-title-md">Tecnologias</h4>

          <div className="flex gap-2">
            <Skeleton className="rounded-2xl">
              <div className="w-16 h-7" />
            </Skeleton>
            <Skeleton className="rounded-2xl">
              <div className="w-16 h-7" />
            </Skeleton>
            <Skeleton className="rounded-2xl">
              <div className="w-16 h-7" />
            </Skeleton>
          </div>
        </div>
      </div>
    )
  }

  const { colors, description, icon, title, technologies, link, ...data } =
    props
  return (
    <div
      {...data}
      className={`${styles.container} ${colors.background} gap-4 shadow-md`}
    >
      <div className="flex gap-4 items-center">
        <i
          className={`w-10 h-10 rounded flex justify-center items-center ${colors.iconBackground}`}
        >
          <Icon icon={icon} className="text-white text-2xl" />
        </i>
        <h3 className="text-title-xl">{title}</h3>

        <IconLink
          href={link}
          content="Ir para o projeto"
          icon="hugeicons:link-square-02"
          className="bg-white/50 hover:text-blue-600 hover:bg-white ml-auto"
          target="_blank"
        />
      </div>

      <p className="flex-1">{description}</p>

      <div className="flex flex-col gap-2">
        <h4 className="text-title-md">Tecnologias</h4>

        <div className="flex gap-2">
          {technologies.map((tech, i) => (
            <Badger color={tech.color} key={`${i}-${tech.color}`}>
              {tech.children}
            </Badger>
          ))}
        </div>
      </div>
    </div>
  )
}
