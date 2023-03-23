import { CalendarIcon } from '@heroicons/react/24/outline'

import { Badger } from '../../atoms/Badger'
import { Image } from '../../atoms/Image'
import { Link } from '../../atoms/Link'

import { TypeComponentCardProjectLarge } from './type'

import * as S from './styles'


export const CardProjectLarge = (props: TypeComponentCardProjectLarge) => {
  return (
    <S._Container>
      <S._Header>
        <S._ContainerImage>
          <Image
            className="background_project"
            alt={`Plano de fundo de cartão do ${props.title}`}
            src={props.image.background.src}
          />

          <Image
            className="icon_project"
            alt={`Ícone de cartão do ${props.title}`}
            src={props.image.icon.src}
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
