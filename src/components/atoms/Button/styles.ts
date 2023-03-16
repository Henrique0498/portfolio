import styled from 'styled-components'

export const _Container = styled.button`
  align-items: center;
  border: 2px solid ${({theme}) => theme.colors.blue[500]};
  border-radius: 0.25rem;
  color: ${({theme}) => theme.colors.blue[500]};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 2.75rem;
  justify-content: center;
  line-height: 1.25rem;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
`
