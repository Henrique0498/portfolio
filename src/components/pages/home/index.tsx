import { Icon } from '../../atoms/Icons'
import { Welcome } from '../../molecules/Welcome/indesx'
import * as S from './styles'

export function PageHome() {
  return (
    <S._Container className="grid grid-cols-4 gap-4">
      <Welcome className="col-span-4" />

      <S._Description className="col-span-4">
        {/* <Icon/> */}
        <p>
          Sou desenvolvedor a um pouco mais de 3 anos, hoje invisto a maior
          parte do meu tempo em estudos de tecnologias voltadas ao front end,
          além de reforçar minhas soft-skills. Acredito que com esforço e foco
          se obtém tudo!
        </p>
        <div className="description_background" />
      </S._Description>
    </S._Container>
  )
}
