import { useRef, useState } from 'react'

import { TypeComponentScrollText } from './types'

import * as S from './styles'

export function ScrollText({ children, ...props }: TypeComponentScrollText) {
  const [length, setLength] = useState(100)
  const spanRef = useRef<HTMLSpanElement | null>(null)

  function handleSetLength() {
    const length =
      (spanRef.current.parentElement?.offsetWidth ?? 0) -
      spanRef.current.offsetWidth
    setLength(length > 0 ? 0 : length)
  }

  return (
    <S.Container onMouseEnter={handleSetLength} length={length} {...props}>
      <span ref={spanRef}>{children}</span>
    </S.Container>
  )
}
