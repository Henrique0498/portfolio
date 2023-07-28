import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

import { Icon } from '../../atoms/Icons'
import { Welcome } from '../../molecules/Welcome'
import { TypeComponentCardProjectLarge } from '../../organisms/CardProjectLarge/type'
import { storeGithubUserByUsername } from 'storage/github/user'

import { TypePageHomepage } from './types'

import * as S from './styles'

export function PageHome({ code }: TypePageHomepage) {
  const databaseGithub = useRecoilValue(storeGithubUserByUsername)
  const timeExperience = new Date().getFullYear() - 2021

  if (!databaseGithub) {
    return null
  }

  return (
    <S._Container className="grid gap-x-4 grid-cols-4 lg:grid-cols-12">
      <Welcome code={code} className="col-span-4  lg:col-span-12" />
      <S._Description className="col-span-4 lg:col-span-12" id="description">
        <div className="max-w-screen-2xl lg:grid lg:grid-cols-2 py-20">
          <div className="header">
            <div className="main_head">
              <span className="head_title">
                <h2>Apresentação</h2>
              </span>
              <p>Uma breve descrição sobre mim.</p>
            </div>
          </div>

          <div className="body shadow-xl">
            <p>
              Sou desenvolvedor há um pouco mais de <b>{timeExperience} anos</b>
              , atualmente estou trabalhando em São Paulo no <b>Front-End </b>
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
      </S._Description>
      {/*







































      */}
      <S._Technologies className="col-span-4 lg:col-span-12" id="tecnologies">
        {/* <div className="technologies_decorators">
          <Icon icon="backgroundTech" />
        </div> */}

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

      {/* <S._Contacts>
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
      </S._Contacts> */}
    </S._Container>
  )
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
