import { useRecoilValue } from 'recoil'

import { Welcome } from '../../molecules/Welcome'
import { storeGithubUserByUsername } from 'storage/github/user'

// import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

import { Card } from 'components/organisms/Card'

import { TypePageHomepage } from './types'

import * as S from './styles'
import useSWR from 'swr'
import {
  SYSTEM_GET_TECHNOLOGIES,
  getSystemTechnologies
} from 'services/axios/urls/system/technologies'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  useDisclosure
} from '@nextui-org/react'
import { useState } from 'react'
import { TypeReturnApiTechnologies } from 'pages/api/v1/technologies'

export function PageHome({ code }: TypePageHomepage) {
  const databaseGithub = useRecoilValue(storeGithubUserByUsername)
  const timeExperience = new Date().getFullYear() - 2021
  const [technology, setTechnology] =
    useState<TypeReturnApiTechnologies | null>(null)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { data, isLoading } = useSWR(
    SYSTEM_GET_TECHNOLOGIES,
    getSystemTechnologies
  )

  if (!databaseGithub) {
    return null
  }

  function handleClickTechnology(value: TypeReturnApiTechnologies) {
    return () => {
      setTechnology(value)
      console.log('teste')
      onOpen()
    }
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

      <S._Technologies className="col-span-4 lg:col-span-12" id="technologies">
        <div className="technologies_main">
          <div className="main_head pb-4">
            <span className="head_title">
              <h2>Tecnologias</h2>
            </span>
            <p>Stacks que mais domino nesse momento.</p>
          </div>
          {isLoading ? (
            <div className="h-80 flex justify-center items-center">
              <Spinner size="lg" label="Carregando..." color="primary" />
            </div>
          ) : (
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {data?.data.map((item) => (
                <Card
                  {...item}
                  key={item.id}
                  subtitle="Clique para saber mais"
                  isPressable
                  // onPress={handleClickTechnology(item)}
                />
              ))}
            </div>
          )}
        </div>
      </S._Technologies>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>{technology?.title}</ModalHeader>
          <ModalBody>{teste}</ModalBody>
        </ModalContent>
      </Modal>
    </S._Container>
  )
}

const teste = `

O TypeScript é uma linguagem de programação que foi criada para ajudar os desenvolvedores a escreverem código de forma mais confiável e organizada. Em vez de escrever simplesmente código JavaScript, o TypeScript permite que você adicione tipos aos seus dados, o que ajuda a prevenir erros antes mesmo de executar o programa.

Imagine o TypeScript como um assistente que ajuda a identificar e corrigir erros em seu código antes que você o execute, tornando-o mais seguro e menos propenso a bugs. Ele também torna mais fácil para os programadores entenderem e colaborarem em projetos de software, tornando o código mais legível e documentado.

Em resumo, o TypeScript é uma ferramenta que torna a programação mais segura e compreensível, especialmente para desenvolvedores, tornando a criação de software mais eficiente e menos sujeita a erros.

`
