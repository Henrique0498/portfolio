import Image from 'next/image'
import { MenuKebab } from '../../atoms/MenuKebab'
import * as S from './styles'

export const CardProjectLarge = () => {
  return (
    <S._Container>
      <S._Header>
        <div className="header_profile">
          <Image
            alt="Imagem do projeto x"
            src="https://github.com/Henrique0498/Henrique0498/raw/main/img/TypeScript.svg"
            width={32}
            height={32}
          />

          <h6>Titulo</h6>
        </div>

        <MenuKebab title="Opções do projeto" />
      </S._Header>

      <S._Body>
        <span className="body_title">Descrição</span>

        <p className="body_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quis dolore debitis sapiente neque asperiores, officiis ex aliquam
          aperiam. Quam perferendis voluptatibus alias nihil minima dignissimos
          et similique nulla suscipit.
        </p>
      </S._Body>

      <S._Footer>
        <span className="footer_title">Ultima atualização</span>
        <span className="footer_date">10 dez de 2018</span>
      </S._Footer>
    </S._Container>
  )
}
