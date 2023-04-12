import styled from 'styled-components'

export const _Container = styled.span`
  color: ${({ theme }) => theme.colors.blue[600]};
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
