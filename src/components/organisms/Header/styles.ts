import { transparentize } from 'polished'
import styled from 'styled-components'

export const _Container = styled.div`
  background: ${({ theme }) => transparentize(0.8, theme.colors.white)};
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(0.5rem);
  -moz-backdrop-filter: blur(0.5rem);
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  width: 100%;
  z-index: 300;
`
