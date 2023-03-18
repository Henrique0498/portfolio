import Link from 'next/link'
import { Icon } from '../../atoms/Icons'
import { Welcome } from '../../molecules/Welcome'
import * as S from './styles'

export function PageHome() {
  const timeExperience = new Date().getFullYear() - 2019

  return (
    <S._Container className="grid grid-cols-4 gap-4">
      <Welcome className="col-span-4" />

      <S._Description className="col-span-4">
        <Icon
          icon="backgroundDiagonal"
          className="description_background text-gray-900"
        />
        <div className="description_decorators">
          <span>Quem é</span>
          <span>Henrique Lopes</span>
        </div>
        <div className="description_container">
          <Icon icon="quotationMarks" className="container_quotationMarks" />
          <p>
            &nbsp;&nbsp;Sou desenvolvedor a um pouco mais de
            <b> {timeExperience} anos</b>, graduado em Gestão de TI na faculdade
            Flamingo, e atualmente fazendo graduação de ADS na{' '}
            <Link href="https://www.fiap.com.br/" target="_blank">
              FIAP
            </Link>
            .<br />
            &nbsp;&nbsp;Hoje invisto a maior parte do meu tempo estudando
            tecnologias voltadas ao <b>Front-End</b>, além de reforçar minhas
            <b> soft-skills</b>.<br />
            Acredito que com esforço e foco se obtém tudo!
          </p>
        </div>
      </S._Description>
    </S._Container>
  )
}
