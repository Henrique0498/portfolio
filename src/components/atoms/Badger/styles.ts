import styled from 'styled-components'
import { TypeComponentBadgerStyle } from './types'

export const _Container = styled.div<TypeComponentBadgerStyle>`
  background-color: ${({ theme, color }) => theme.colors[color][300]};
  color: ${({ theme, color }) => theme.colors[color][900]};
  padding: 0.25rem 0.75rem;
  ${({ theme }) => theme.text.body.sm}
  border-radius: 0.25rem;
`
