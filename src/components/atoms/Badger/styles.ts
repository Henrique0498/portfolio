import styled from 'styled-components'

export const _Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[300]};
  color: ${({ theme }) => theme.colors.blue[900]};
  padding: 0.25rem 0.75rem;
  ${({theme}) => theme.text.body.sm}
  border-radius: 0.25rem;
`
