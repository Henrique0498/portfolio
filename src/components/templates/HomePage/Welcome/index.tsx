import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import Coding from '@/components/molecules/Coding'
import Badger from '@/components/atoms/Badger'

interface InWelcome extends ComponentProps<'section'> {}

export default function Welcome(props: InWelcome) {
  return (
    <section
      {...props}
      className={`${styles.container} container col-span-4 lg:col-span-12`}
    >
      <div className="p-4">
        <div className={styles.badgers}>
          <Badger color="green">Vue</Badger>
          <Badger color="violet">React</Badger>
          <Badger color="blue">Typescript</Badger>
          <Badger color="yellow">Javascript</Badger>
        </div>

        <div className={`${styles.containerText} text-title-7xl`}>
          <span>Opa!</span>
          <span>Eu sou um</span>
          <span>Front-End Developer.</span>
        </div>
      </div>

      <Coding
        code={code}
        lang="tsx"
        breadcrumbs="Site > Homepage"
        title="Pagina inicial"
        theme="one-light"
        className="ml-auto shadow-xl"
        style={{ width: '516px', minHeight: '393px' }}
      />
    </section>
  )
}

const code = `function HomePage(){
  return (
    <>
      <BemVindo>
        Hi! Seja bem vindo ao meu portfólio!
      </BemVindo>
      <Descicao>
        Essa é página inicial, ela vai contar sobre mim
      </Descicao>
    </>
  )
}`
