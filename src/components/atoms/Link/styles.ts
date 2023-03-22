import styled from 'styled-components'

export const _Container = styled.span`
  color: ${({ theme }) => theme.colors.blue[600]};
  display: flex;
  position: relative;
  justify-content: center;

  ::before {
    content: '';
    position: absolute;
    background-color: currentColor;
    width: 0rem;
    height: 0.126rem;
    bottom: 0rem;
    transition: all 200ms ease-in-out;
  }

  :hover {
    ::before {
      width: 100%;
    }
  }
`
