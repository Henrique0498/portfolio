import { transparentize } from 'polished'
import styled from 'styled-components'

export const _Container = styled.header`
  background: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(0.5rem);
  -moz-backdrop-filter: blur(0.5rem);
  position: fixed;
  transition: 200ms ease-in-out;
  width: 100%;
  z-index: 50;
  top: 0;

  & > .container_nav {
    display: flex;
    height: 6.25rem;
    justify-content: space-between;
    align-items: center;
    transition: 200ms ease-in-out;
    padding: 0 1rem;
  }

  &[scroll='true'] {
    background: ${({ theme }) => transparentize(0.15, theme.colors.gray[950])};
    color: ${({ theme }) => theme.colors.white};

    & > .container_nav {
      height: 3.75rem;
    }

    a {
      color: ${({ theme }) => theme.colors.blue[900]};
    }
  }
`

export const _Nav = styled.nav`
  display: none;

  .nav_list {
    display: flex;
    gap: 1rem;

    .list_link {
      span {
        color: ${({ theme }) => theme.colors.gray[50]};
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`
