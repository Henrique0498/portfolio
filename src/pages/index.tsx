import Head from 'next/head'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { AxiosError } from 'axios'

import { Header } from '../components/organisms/Header'
import { PageHome } from '../components/pages/home'
import { Sidebar } from '../components/organisms/Sidebar'

import { getSystemGithubUserById } from 'services/axios/urls/system/github/user'
import { storeGithubUserByUsername } from 'storage/github/user'
import { highlight } from 'lib/shiki'

import { TypeResponseGitHubErrorUserByUsername } from 'services/axios/urls/github/user/types'
import { Footer } from 'components/organisms/Footer'

export default function Home({ userData, highlightedHtml }) {
  const setCounter = useSetRecoilState(storeGithubUserByUsername)

  useEffect(() => {
    setCounter(userData)
  }, [setCounter, userData])

  return (
    <>
      <Head>
        <title>Henrique Lopes</title>
        <meta name="description" content="Portfólio de Henrique Lopes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sidebar />
      <PageHome code={highlightedHtml} />
      <Footer />
    </>
  )
}

const codeString = `function HomePage(){
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
}
`

export async function getStaticProps() {
  try {
    const { data: userData } = await getSystemGithubUserById(
      'Henrique0498'
    ).catch(({ status }: AxiosError<TypeResponseGitHubErrorUserByUsername>) => {
      return {
        status,
        data: null
      }
    })

    if ('message' in userData) {
      return {
        notFound: true,

        props: {
          message: 'Usuário não encontrado'
        }
      }
    }

    const codeHighlight = await highlight(codeString, 'tsx')

    return {
      props: {
        userData,
        revalidate: 10,
        highlightedHtml: codeHighlight
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}
