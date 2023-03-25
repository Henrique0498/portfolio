import styled, { css } from 'styled-components'
import { TypeComponentScrollTextStyled } from './types'

function teste(value) {
  console.log('value', value)

  return value
}

export const Container = styled.div<TypeComponentScrollTextStyled>`
  ${({ length }) => css`
    &:hover > span {
      transform: translateX(${teste(length) + 'px'});
    }

    span {
      transition: ${-length * 0.03}s;
    }
  `}

  width: 100%;
  overflow: hidden;
  min-width: 3rem;

  > span {
    white-space: nowrap;
    display: inline-block;
    direction: ltr;
    pointer-events: none;
  }
`
