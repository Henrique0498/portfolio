import styled from 'styled-components'

import { TypeComponentSidebarStyles } from './types'

export const _Container = styled.aside<TypeComponentSidebarStyles>`
  bottom: 0rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gray[100]} 0%,
    ${({ theme }) => theme.colors.gray[300]} 100%
  );
  height: calc(100vh - 6.25rem);
  left: -25rem;
  padding: 1rem;
  position: fixed;
  transition: 200ms ease-in-out;
  width: 25rem;
  z-index: 290;

  &[scroll='true'] {
    height: calc(100vh - 3.75rem);
  }

  @media (max-width: 768px) {
    left: ${({ isVisible }) => (isVisible ? '-25rem' : '0px')};
  }
`

export const _List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: currentColor;
    display: flex;
    padding: 0.5rem 0;
  }
`
