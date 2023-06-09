import * as S from './styles'
import { TypeWelcome } from './types'
import { storeGithubUserByUsername } from 'storage/github/user'
import { useRecoilValue } from 'recoil'
import { Badger } from 'components/atoms/Badger'

export const Welcome = (props: TypeWelcome) => {
  const databaseGithub = useRecoilValue(storeGithubUserByUsername)

  if (!databaseGithub) {
    return null
  }

  return (
    <S._Container {...props}>
      <S._Presentation>
        <div className="badgers">
          <Badger color="gray">NextJs</Badger>
          <Badger color="violet">React</Badger>
          <Badger>TypeScript</Badger>
          <Badger color="yellow">JavaScript</Badger>
        </div>
        <S.ContainerText>
          <span>Opa!</span>
          <span>Eu sou um</span>
          <span>Developer Front-End.</span>
        </S.ContainerText>
      </S._Presentation>

      <S._Coding>Coding</S._Coding>
    </S._Container>
  )
}
