import CardInfo from '@/components/molecules/CardInfo'

import styles from './styles.module.scss'

export function Description() {
  return (
    <section className={`container ${styles.container}`}>
      <div>
        <h2 className="text-title-7xl decoration-square after:text-violet-500">
          Sobre
        </h2>
        <p>Tecnologias utilizadas nesse projeto.</p>
      </div>

      <div className={styles.cards}>
        <CardInfo icon="simple-icons:nextdotjs" title="NextJS">
          No portfólio, Next.js proporciona renderização no servidor (SSR),
          otimizando o carregamento de páginas e melhorando o SEO. Ele também
          facilita a criação de rotas dinâmicas e páginas estáticas para maior
          performance.
        </CardInfo>

        <CardInfo icon="simple-icons:typescript" title="TypeScript">
          No portfólio, TypeScript oferece tipagem estática, prevenindo erros
          durante o desenvolvimento. Ele melhora a manutenção, a escalabilidade
          e oferece suporte a melhores autocompletes e validações no código.
        </CardInfo>

        <CardInfo icon="simple-icons:testinglibrary" title="Testing Library">
          Testing Library é usada no portfólio para garantir que os componentes
          funcionem corretamente em diferentes cenários. Ela permite a criação
          de testes focados no comportamento do usuário e na usabilidade.
        </CardInfo>

        <CardInfo icon="simple-icons:sass" title="TypeScript">
          Sass é utilizado no portfólio para organizar e modularizar o CSS,
          facilitando a criação de estilos mais complexos e reutilizáveis. Suas
          funcionalidades como variáveis e mixins tornam o código mais limpo e
          eficiente.
        </CardInfo>
      </div>
    </section>
  )
}
