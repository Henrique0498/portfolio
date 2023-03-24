import styled from 'styled-components'
import { TypeComponentBadgerStyle } from './types'

export const _Container = styled.div<TypeComponentBadgerStyle>`
  background-color: ${({ theme, color }) => theme.colors[color][300]};
  border-radius: 0.25rem;
  color: ${({ theme, color }) => theme.colors[color][900]};
  height: fit-content;
  padding: 0.25rem 0.75rem;
  width: fit-content;
  ${({ theme }) => theme.text.body.sm}
`
