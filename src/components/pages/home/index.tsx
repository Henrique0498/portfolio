import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

import { Icon } from '../../atoms/Icons'
import { ListProject } from '../../molecules/ListProject'
import { Welcome } from '../../molecules/Welcome'
import { CardProjectLarge } from '../../organisms/CardProjectLarge'
import { TypeComponentCardProjectLarge } from '../../organisms/CardProjectLarge/type'
import { TypeComponentListProject } from '../../molecules/ListProject/types'
import { storeGithubUserByUsername } from 'storage/github/user'

import * as S from './styles'

export function PageHome() {
  const databaseGithub = useRecoilValue(storeGithubUserByUsername)
  const timeExperience = new Date().getFullYear() - 2019

  if (!databaseGithub) {
    return null
  }

  return (
    <S._Container className="grid gap-x-4 grid-cols-4 lg:grid-cols-12">
      <Welcome className="col-span-4  lg:col-span-12" />

      <S._Description className="col-span-4 lg:col-span-12" id="description">
        <div className="description_decorators">
          <span>Quem é</span>
          <span>Henrique Lopes</span>
        </div>
        <div className="description_container">
          <Icon icon="quotationMarks" className="container_quotationMarks" />
          <p>
            Sou desenvolvedor a um pouco mais de
            <b> {timeExperience} anos</b>, graduado em Gestão de TI na faculdade
            Flamingo, e atualmente fazendo graduação de ADS na{' '}
            <Link href="https://www.fiap.com.br/" target="_blank">
              FIAP
            </Link>
            .<br />
            Hoje invisto a maior parte do meu tempo estudando tecnologias
            voltadas ao <b>Front-End</b>, além de reforçar minhas
            <b> soft-skills</b>.<br />
            Acredito que com esforço e foco se obtém tudo!
          </p>
        </div>
      </S._Description>

      <S._Technologies className="col-span-4  lg:col-span-12" id="tecnologies">
        <div className="technologies_decorators">
          <Icon icon="backgroundTech" />
        </div>

        <div className="technologies_main">
          <div className="main_head">
            <span className="head_title">
              <h2>Tecnologias</h2>
            </span>
            <p>Stacks que mais domino nesse momento.</p>
          </div>
          <div className="main_carousel grid grid-cols-4 lg:grid-cols-12 gap-4">
            {technologies.map((item) => (
              <div key={item.id}>
                <Link href={item.link} target="_blank">
                  <Image
                    alt={`Tecnologia ${item.title}`}
                    className="shadow-md"
                    src={item.image.source}
                    height={80}
                    width={80}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </S._Technologies>

      <S._Projects className="col-span-4 lg:col-span-12" id="projects">
        <div className="projects_main">
          <Icon icon="tape" className="main_decorator_tape" />
          <Icon icon="gitHubLarge" className="main_decorator" />
          <div className="main_head">
            <span className="head_title">
              <h2>Projetos principais</h2>
            </span>
            <p>Estes são os meus projetos principais.</p>
          </div>

          <div className="main_cards grid gap-4 grid-cols-1 lg:grid-cols-12">
            <CardProjectLarge {...card} className="col-span-1 lg:col-span-4" />
          </div>
        </div>

        <div className="projects_secondary" id="updates">
          <Icon icon="gitSmall" className="secondary_decorator" />
          <div className="secondary_head">
            <span className="head_title">
              <h2>Ultimas atualizações</h2>
            </span>
            <p>Atualizações do GitHub.</p>
          </div>
          <ListProject {...list} />
        </div>
      </S._Projects>

      <S._Contacts>
        <div className="contacts_container col-span-4 gap-4 grid grid-cols-4 lg:col-span-12 lg:grid-cols-12">
          <div className="col-span-2 contacts_title">Contatos</div>

          <div className="col-span-2 contacts_links">
            <ul>
              <li>
                <Link href={databaseGithub?.html_url} target="_blank">
                  <RiGithubLine className="link_icon" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/henrique-ls/"
                  target="_blank"
                >
                  <RiLinkedinFill className="link_icon" />
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href={`mailto:${databaseGithub?.email}`}>
                  <AtSymbolIcon className="link_icon" />
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </S._Contacts>
    </S._Container>
  )
}

const list: TypeComponentListProject = {
  list: [
    {
      badgers: [],
      date: new Date(),
      id: 'teste',
      repository: 'teste',
      title: 'teste'
    }
  ]
}

const technologies = [
  {
    id: '1',
    title: 'Typescript',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/TypeScript.svg'
    },
    link: 'https://www.typescriptlang.org/pt/'
  },
  {
    id: '2',
    title: 'React',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/React.svg'
    },
    link: 'https://pt-br.reactjs.org/'
  },
  {
    id: '3',
    title: 'Next.js',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/Next.svg'
    },
    link: 'https://nextjs.org/'
  },
  {
    id: '4',
    title: 'Nest.js',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/Nest.svg'
    },
    link: 'https://nestjs.com/'
  },
  {
    id: '5',
    title: 'GraphQL',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/GraphQL.svg'
    },
    link: 'https://graphql.org/'
  },
  {
    id: '6',
    title: 'Jest',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/Jest.svg'
    },
    link: 'https://jestjs.io/pt-BR/docs/getting-started'
  },
  {
    id: '7',
    title: 'Storybook',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/Storybook.svg'
    },
    link: 'https://storybook.js.org/'
  },
  {
    id: '8',
    title: 'styled-component',
    image: {
      source:
        'https://github.com/Henrique0498/Henrique0498/raw/main/img/Styled-Components.svg'
    },
    link: 'https://styled-components.com/'
  }
]

const card: TypeComponentCardProjectLarge = {
  badgers: [
    {
      id: 'teste',
      children: 'typescript'
    }
  ],
  date: new Date(),
  image: {
    background: {
      src: '/images/card-background.jpg'
    },
    icon: {
      src: 'https://raw.githubusercontent.com/Henrique0498/Henrique0498/89a5040f5b12b8dfe45273491854886507dabf72/img/Logo.svg'
    }
  },
  repository: {
    src: 'https://github.com/Henrique0498'
  },
  title: 'Teste 432 43 432 4324324 4322'
}
