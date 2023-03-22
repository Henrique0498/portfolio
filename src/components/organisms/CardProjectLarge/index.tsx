// import Image from 'next/image'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { Badger } from '../../atoms/Badger'
import { Image } from '../../atoms/Image'
import { Link } from '../../atoms/Link'

import * as S from './styles'

export const CardProjectLarge = () => {
  return (
    <S._Container>
      <S._Header>
        <S._ContainerImage>
          <Image
            className="background_project"
            alt="TESTE TESTE"
            src="/images/card-background.jpg"
          />

          <Image
            className="icon_project"
            alt="TESTE TESTE"
            src=" https://github.com/Henrique0498/Henrique0498/raw/main/img/Next.svg"
          />
        </S._ContainerImage>
      </S._Header>
      <S._Body>
        <div className="body_title">
          <h6>Teste</h6>

          <Badger>Typescript</Badger>
        </div>
        <div className="body_description">
          <div className="description_item">
            <CalendarIcon className="item_icon" /> 10 dez de 2018
          </div>
          <div className="description_item">
            <Link href="https://www.instagram.com" target="_blank">
              Acessar o site
            </Link>
          </div>
        </div>
      </S._Body>
    </S._Container>
  )
}
