import { CalendarIcon } from '@heroicons/react/24/outline'

import { Badger } from '../../atoms/Badger'
import { Image } from '../../atoms/Image'
import { Link } from '../../atoms/Link'
import { ScrollText } from '../../atoms/ScrollText'

import {
  TypeComponentCardProjectLarge,
  TypeComponentCardProjectLargeBadgers
} from './type'

import * as S from './styles'
import { formatDate } from '../../../utils/formatDate'

export const CardProjectLarge = ({
  badgers,
  date,
  image,
  repository,
  title
}: TypeComponentCardProjectLarge) => {
  return (
    <S._Container>
      <S._ContainerImage>
        <Image
          className="background_project"
          alt={`Plano de fundo de cartão do ${title}`}
          src={image.background.src}
        />

        <Image
          className="icon_project"
          alt={`Ícone de cartão do ${title}`}
          src={image.icon.src}
        />
      </S._ContainerImage>
      <S._Header>
        <ScrollText className="header_title">{title}</ScrollText>

        <div className="header_badgers">{renderBadgers(badgers)}</div>
      </S._Header>
      <S._Body>
        <div className="body_date">
          <CalendarIcon className="item_icon" />
          {formatDate(date)}
        </div>
        <Link href={repository.src} target="_blank">
          Repositório
        </Link>
      </S._Body>
    </S._Container>
  )
}

function renderBadgers(badgers: TypeComponentCardProjectLargeBadgers[]) {
  return badgers.map((badger) => <Badger key={badger.id} {...badger} />)
}
