import Welcome from '@/components/templates/HomePage/Welcome'
import FlowTechnology from '@/components/organisms/FlowTechnology'

import styles from './styles.module.scss'

export default function HomePage() {
  const timeExperience = new Date().getFullYear() - 2021

  return (
    <main className={`${styles.container} `}>
      <Welcome />

      <section className={`${styles.description} col-span-4 lg:col-span-12`}>
        <div className="container lg:grid lg:grid-cols-2 py-20">
          <div className={styles.description_header}>
            <h2 className="decoration-square text-title-xl">Apresentação</h2>
            <p>Uma breve descrição sobre mim.</p>
          </div>

          <div className={`${styles.description_body} body shadow-xl`}>
            <p>
              Sou desenvolvedor <b>Front-end</b> há pouco mais de
              <b> {timeExperience} anos</b>, trabalhei em uma empresa de São
              Paulo utilizando <b>React</b> e <b>Typescript</b> como linguagens
              principais e também sou formado em Gestão da Tecnologia da
              Informação.
              <br />
              Invisto meu tempo livre estudando tecnologias voltadas para
              Front-end além de sempre tentar melhorar minhas <b>soft skills</b>
              . E por que isso?
              <br />
              Porque acho incrível o ecossistema de desenvolvimento web, onde
              tecnologias novas surgem o tempo todo. Então, sempre existe uma
              maneira nova e melhor de fazer algo já existente.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.technologies} col-span-4 lg:col-span-12`}>
        <div className={`${styles.technologies_main} container`}>
          <div className="main_head pb-4">
            <h2 className="decoration-square text-title-xl">Tecnologias</h2>
            <p>Estas são as stacks que mais domino nesse momento.</p>
          </div>
          <div className={styles.body}>
            <FlowTechnology />
          </div>
        </div>
      </section>
    </main>
  )
}
