import { useRecoilValue } from 'recoil'

import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

import { Link } from 'components/atoms/Link'
import { storeGithubUserByUsername } from 'storage/github/user'

import { TypeResponseGetUserByUsername } from 'services/axios/urls/github/user/types'

import * as S from './styles'

export function Footer() {
  const databaseGithub = useRecoilValue(storeGithubUserByUsername)

  return (
    <S._Container>
      {/* <div className="contacts_container col-span-4 gap-4 grid grid-cols-4 lg:col-span-12 lg:grid-cols-12">
        <div className="col-span-2 contacts_title">Contatos</div>

        <div className="col-span-2 contacts_links"> */}
      {controlRenderContacts(databaseGithub)}
      {/* </div>
      </div> */}
    </S._Container>
  )
}

function controlRenderContacts(data?: TypeResponseGetUserByUsername) {
  if (data) {
    return (
      <ul>
        <li>
          <Link href={data.html_url} target="_blank">
            <RiGithubLine className="link_icon" />
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/henrique-ls/" target="_blank">
            <RiLinkedinFill className="link_icon" />
            Linkedin
          </Link>
        </li>
        <li>
          <Link href={`mailto:${data.email}`}>
            <AtSymbolIcon className="link_icon" />
            Email
          </Link>
        </li>
      </ul>
    )
  }

  return 'Erro ao carregar os contatos'
}
