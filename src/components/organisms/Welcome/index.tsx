import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'
import Coding from '@/components/molecules/Coding'
import Badger from '@/components/atoms/Badger'

interface InWelcome extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {}

export default function Welcome({ className = '', ...props }: InWelcome) {
  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <div>
        <div className={styles.badgers}>
          <Badger color="gray">NextJS</Badger>
          <Badger>NextJS</Badger>
          <Badger color="blue">NextJS</Badger>
          <Badger color="yellow">NextJS</Badger>
        </div>

        <div className={`${styles.containerText} textTitle3`}>
          <span>Opa!</span>
          <span>Eu sou um</span>
          <span>Front-End Developer.</span>
        </div>
      </div>

      <Coding code={code} lang="tsx" className="ml-auto shadow-xl" />
    </div>
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
