import styled from 'styled-components'
import { TypeComponentImageStyled } from './types'

export const _Container = styled('div')<TypeComponentImageStyled>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    object-fit: ${({ objectFit }) => objectFit};
  }
`
