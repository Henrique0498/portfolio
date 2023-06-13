import * as S from './styles'
import { TypeWelcome } from './types'
import { storeGithubUserByUsername } from 'storage/github/user'
import { useRecoilValue } from 'recoil'
import { Badger } from 'components/atoms/Badger'
import { Coding } from '../Coding'

export const Welcome = ({ code, ...props }: TypeWelcome) => {
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

        <S._ContainerText>
          <span>Opa!</span>
          <span>Eu sou um</span>
          <span>Developer Front-End.</span>
        </S._ContainerText>
      </S._Presentation>

      <S._Coding>
        <Coding code={code} className="code" />
      </S._Coding>
    </S._Container>
  )
}
