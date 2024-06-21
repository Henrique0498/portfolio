import { Meta, StoryObj } from '@storybook/react'
import Coding, { InCoding } from '.'
import { Suspense } from 'react'

export default {
  title: 'molecules/Coding',
  component: (props) => (
    <Suspense>
      <Coding {...props} />
    </Suspense>
  )
} as Meta

export const Default: StoryObj<InCoding> = {
  args: {
    code: `function HomePage(){
  return (
    <>
      <BemVindo>
        Hi! Seja bem vindo ao meu portfólio!
      </BemVindo>
      <Descicao>
        Essa é página inicial, ela vai contar sobre mim
      </Descicao>
    </>
  )
}`,
    lang: 'jsx'
  }
}
