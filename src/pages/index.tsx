import Head from 'next/head'
import { Header } from '../components/organisms/Header'
import { PageHome } from '../components/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique Lopes</title>
        <meta name="description" content="Portfólio de Henrique Lopes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHome />
    </>
  )
}
