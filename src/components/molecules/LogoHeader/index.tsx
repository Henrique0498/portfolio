import { Image } from '../../atoms/Image'
import * as S from './styled'

export function LogoHeader() {
  return (
    <S._Container>
      <S._ContainerImage>
        <Image
          alt="Logo do cabeçalho"
          src="/images/logo.png"
          width="2.5rem"
          height="2.5rem"
        />
      </S._ContainerImage>
      <h1>Henrique Lopes</h1>
    </S._Container>
  )
}
