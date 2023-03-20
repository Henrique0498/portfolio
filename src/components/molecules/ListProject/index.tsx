import { CalendarIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import * as S from './styled'
import { TypeComponentListProjectInfo } from './types'

export function ListProject() {
  return (
    <S._Container>
      <S._List>
        <S._Header>
          <div className="header_title">Titulo</div>
          <S._Badges></S._Badges>
        </S._Header>
        <S._Body>
          <div className="body_info">
            <Link href="https://www.github.com" target="_blank">
              <Title
                icon={<LinkIcon className="title_icon" />}
                title="Repositório"
              />
            </Link>
          </div>

          <div className="body_date">
            <Title
              icon={<CalendarIcon className="title_icon" />}
              title="10 dez de 2018"
            />
          </div>
        </S._Body>
      </S._List>
      <S._List>
        <S._Header>
          <div className="header_title">Titulo</div>
          <S._Badges></S._Badges>
        </S._Header>
        <S._Body>
          <div className="body_info">
            <Title
              icon={<LinkIcon className="title_icon" />}
              title="Repositório"
            />
          </div>

          <div className="body_date">
            <Title
              icon={<CalendarIcon className="title_icon" />}
              title="10 dez de 2018"
            />
          </div>
        </S._Body>
      </S._List>
    </S._Container>
  )
}

function Title({ icon, title }: TypeComponentListProjectInfo) {
  return (
    <S._Title>
      {icon} {title}
    </S._Title>
  )
}
