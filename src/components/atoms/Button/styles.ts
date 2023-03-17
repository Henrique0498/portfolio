import styled from 'styled-components'

export const _Container = styled.button`
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(0, 138, 255, 0) 0%,
    rgba(0, 138, 255, 0) 50%,
    ${({ theme }) => theme.colors.blue[600]} 50%,
    ${({ theme }) => theme.colors.blue[600]} 100%
  );
  background-position-x: 0%;
  background-position-y: center;
  background-size: 200%, 120%;
  border: 1px solid ${({ theme }) => theme.colors.blue[600]};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.blue[600]};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 2.75rem;
  justify-content: center;
  line-height: 1.25rem;
  padding: 0.75rem 1.5rem;
  position: relative;
  text-transform: uppercase;
  transition: all 200ms;

  :hover,
  :focus {
    background-position-x: 100%;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[300]};
    color: ${({ theme }) => theme.colors.blue[50]};
    outline-offset: -1px;
    outline: 1px solid ${({ theme }) => theme.colors.blue[600]};
  }
`
