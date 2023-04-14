import styled, { DefaultTheme } from 'styled-components'
import { TypeComponentLinkStyled } from './types'

export const _Container = styled.span<TypeComponentLinkStyled>`
  color: ${({ theme, color }) => getColor(color, theme)};
  display: flex;
  height: fit-content;
  justify-content: center;
  position: relative;
  width: fit-content;

  ::before {
    background-color: currentColor;
    bottom: 0rem;
    content: '';
    height: 0.063rem;
    position: absolute;
    transition: all 200ms ease-in-out;
    opacity: 0.7;
    width: 0rem;
  }

  :hover {
    ::before {
      width: 100%;
    }
  }
`

function getColor(value: string, theme: DefaultTheme) {
  if (value in theme.colors) {
    return theme.colors[value][600]
  }

  return value
}
