import { CalendarIcon } from '@heroicons/react/24/outline'
import { formatDate } from '../../../utils/formatDate'
import { Badger } from '../../atoms/Badger'
import { Link } from '../../atoms/Link'

import * as S from './styled'
import { TypeComponentListProject, TypeComponentListProjectInfo } from './types'

export function ListProject({ list }: TypeComponentListProject) {
  return (
    <S._Container>
      {list?.map((item) => (
        <S._List key={item.id}>
          <S._Header>
            <div className="header_title">{item.title}</div>
            <S._Badges>
              {item.badgers?.map((badger) => (
                <Badger key={badger.id} {...badger} />
              ))}
            </S._Badges>
          </S._Header>
          <S._Body>
            <Title
              icon={<CalendarIcon className="title_icon" />}
              title={formatDate(item.date)}
            />
            <Link href={item.repository} target="_blank">
              Repositório
            </Link>
          </S._Body>
        </S._List>
      ))}
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
