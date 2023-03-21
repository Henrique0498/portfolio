// import Image from 'next/image'
import { CalendarIcon, LinkIcon } from '@heroicons/react/24/outline'
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
            src="https://images.unsplash.com/photo-1679245883026-adea0f43e6f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
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
        </div>
        <div className="body_description">
          <div className="description_item">
            <Link href="https://www.instagram.com" target="_blank">
              <LinkIcon className="item_icon" /> Acessar o site
            </Link>
          </div>
          <div className="description_item">
            <CalendarIcon className="item_icon" /> 10 dez de 2018
          </div>
        </div>
      </S._Body>
    </S._Container>
  )
}
