import variables from './homepage.module.scss'

export default function Home() {
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Bem vindo</h1>
      <p className={variables.teste}>teste</p>
    </div>
  )
}
