import { MutableRefObject, useEffect, useRef } from 'react'
import * as S from './styles'
import { TypeWelcome } from './types'

const timeMs = 100
const textInitial = 'Olá,'
const textRender = [' eu sou o Henrique', ' seja bem vindo']
const timeExtends = 2000

function renderText(
  ref: MutableRefObject<HTMLSpanElement>,
  idArray: NodeJS.Timeout[]
) {
  let timeCurrent = 0

  textRender.map((text, indexTextRender) => {
    text.split('').map((_, index) => {
      const idTimeSetKey = setTimeout(() => {
        ref.current.innerHTML =
          textInitial + textRender[indexTextRender].slice(0, index)
        idArray = idArray.filter((id) => id !== idTimeSetKey)
      }, timeMs * index++ + timeCurrent)

      const idTimeDeleteKey = setTimeout(() => {
        const value = ref.current.innerHTML

        idArray = idArray.filter((id) => id !== idTimeDeleteKey)
        ref.current.innerHTML = value.slice(0, -1)
      }, timeMs * (textRender[indexTextRender].length + index++) + timeCurrent + timeExtends)

      idArray.push(idTimeSetKey, idTimeDeleteKey)
    })

    timeCurrent +=
      textRender[indexTextRender].length * (timeMs * 2) + timeExtends
  })
}

export const Welcome = (props: TypeWelcome) => {
  const refTextWelcome = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const idsTimeout: NodeJS.Timeout[] = []

    renderText(refTextWelcome, idsTimeout)

    const timeInterval = textRender.reduce((before, current) => {
      return (before += current.length * 2 * timeMs + timeExtends)
    }, 400)

    console.log(timeInterval)

    const idSetInterval = setInterval(() => {
      renderText(refTextWelcome, idsTimeout)
    }, timeInterval)

    console.log(idsTimeout)

    return () => {
      clearInterval(idSetInterval)
      idsTimeout.forEach((id) => {
        clearTimeout(id)
      })
    }
  }, [])

  return (
    <S._Container {...props}>
      <span ref={refTextWelcome}>{textInitial}</span>
    </S._Container>
  )
}
