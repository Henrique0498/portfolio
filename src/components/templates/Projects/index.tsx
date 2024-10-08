import MainProject from './MainProject'
import GitHubProjects from './GitHubProjects'
import styles from './styles.module.scss'
import { ComponentProps } from 'react'
import Welcome from './Welcome'
import { Description } from './Description'

interface InProjects extends ComponentProps<'main'> {}

export default function Projects(props: InProjects) {
  return (
    <main {...props} className={styles.container}>
      <Welcome />

      <MainProject />

      <Description />

      <GitHubProjects />
    </main>
  )
}
