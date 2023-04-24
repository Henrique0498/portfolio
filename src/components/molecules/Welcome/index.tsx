import { useEffect, useRef } from 'react'
import { Image } from '../../atoms/Image'
import * as S from './styles'
import { TypeControlRenderText, TypeWelcome } from './types'

const textInitial = 'Olá, '
const textRender = ['eu sou o Henrique', 'seja bem vindo']

function controlRenderText({
  count = 0,
  idTimeoutArray,
  indexByArray = 0,
  initialValue,
  ref,
  texts,
  timeMs = 100,
  timeMsFinal = 2000,
  timeMsResult,
  typeFunction = true
}: TypeControlRenderText) {
  let newTeste = ''
  let changeFunction
  let countResult = count
  let indexByArrayModified = indexByArray
  let timeResult = timeMsResult

  idTimeoutArray.push(
    setTimeout(() => {
      if (count === texts[indexByArray].length) {
        timeResult = timeMsFinal + timeMs
      } else {
        timeResult = timeMs
      }

      if (count <= texts[indexByArray].length && typeFunction) {
        newTeste = initialValue + texts[indexByArray].slice(0, count)
        changeFunction = count < texts[indexByArray].length
        countResult = changeFunction ? count + 1 : count - 1

        ref.current.innerHTML = newTeste
      } else {
        newTeste = initialValue + texts[indexByArray].slice(0, count)
        changeFunction = count === 0
        countResult = changeFunction ? count + 1 : count - 1

        if (changeFunction && indexByArray === texts.length - 1) {
          indexByArrayModified = 0
        } else if (changeFunction) {
          indexByArrayModified++
        }

        ref.current.innerHTML = newTeste
      }

      controlRenderText({
        count: countResult,
        idTimeoutArray: idTimeoutArray,
        indexByArray: indexByArrayModified,
        initialValue,
        ref,
        texts,
        timeMs,
        timeMsFinal,
        timeMsResult: timeResult,
        typeFunction: changeFunction
      })
    }, timeResult)
  )
}

export const Welcome = (props: TypeWelcome) => {
  const refTextWelcome = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const idTimeout: NodeJS.Timeout[] = []

    if (refTextWelcome.current) {
      controlRenderText({
        idTimeoutArray: idTimeout,
        initialValue: textInitial,
        ref: refTextWelcome,
        texts: textRender
      })
    }

    return () => {
      idTimeout?.forEach((timeout) => clearTimeout(timeout))
    }
  }, [])

  return (
    <S._Container {...props}>
      <S.ContainerTextSpan ref={refTextWelcome} />

      <S.ContainerText>
        <span>Hey!</span>
        <span>Seja em vindo(a)</span>
        <span>Ao meu Portfólio.</span>
      </S.ContainerText>

      <S.ContainerImage>
        <Image
          className="container_photoUser"
          src="https://avatars.githubusercontent.com/u/39716479?v=4"
          width="20rem"
          height="25rem"
          alt="Teste"
        />
      </S.ContainerImage>
    </S._Container>
  )
}
