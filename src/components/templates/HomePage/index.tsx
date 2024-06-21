import styles from './styles.module.scss'
import Welcome from '@/components/organisms/Welcome'
import FlowTechnology from '@/components/organisms/FlowTechnology'
import { edgesTechnology, nodesTechnology } from './moks/techonology'

interface InHomePage {}

export default function HomePage(props: InHomePage) {
  const timeExperience = new Date().getFullYear() - 2021

  return (
    <main
      {...props}
      className={`${styles.container} grid gap-x-4 grid-cols-4 lg:grid-cols-12`}
    >
      <Welcome className="col-span-4 lg:col-span-12" />

      <section className={`${styles.description} col-span-4 lg:col-span-12`}>
        <div className="max-w-screen-2xl lg:grid lg:grid-cols-2 py-20">
          <div className={styles.description_header}>
            <h2 className={`title ${styles.container_text}`}>Apresentação</h2>
            <p>Uma breve descrição sobre mim.</p>
          </div>

          <div className={`${styles.description_body} body shadow-xl`}>
            <p>
              Sou desenvolvedor há um pouco mais de <b>{timeExperience} anos</b>
              , trabalhei em uma empresa, em São Paulo no <b>Front-End </b>
              com <b>React</b> utilizando <b> Typescript</b> como linguagem.
              <br />
              Eu sou graduado em Gestão da tecnologia da informação, e
              atualmente faço graduação de ADS na FIAP, e nos meus tempos livre
              eu investido parte do meu tempo estudando tecnologias voltadas ao
              <b> Front-End</b>, além de reforçar minhas <b>soft-skills</b>.
              <br />
              <br />E o por quê disso? Porquê simplesmente acho incrível o
              desenvolvimento web, onde cada dia sempre tem uma tecnologia nova,
              ou então uma nova maneira de fazer algo já existente.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.technologies} col-span-4 lg:col-span-12`}>
        <div className={styles.technologies_main}>
          <div className="main_head pb-4">
            <h2 className={`title ${styles.container_text}`}>Tecnologias</h2>
            <p>Stacks que mais domino nesse momento.</p>
          </div>
          <div className={styles.test}>
            <FlowTechnology edges={edgesTechnology} nodes={nodesTechnology} />
          </div>
        </div>
      </section>
    </main>
  )
}
