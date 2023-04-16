import styled from 'styled-components'

import { TypeComponentMenuBurgerStyles } from './types'

export const _Container = styled.button<TypeComponentMenuBurgerStyles>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 2.5rem;
  justify-content: center;
  padding: 0.25rem;
  width: 2.5rem;

  .container_icon {
    align-items: center;
    display: flex;
    height: 1rem;
    justify-content: center;
    position: relative;
    width: 100%;
    bottom: initial;

    ::after,
    ::before {
      background: ${({ theme }) => theme.colors.gray[400]};
      border-radius: 0.25rem;
      content: '';
      height: 0.25rem;
      position: absolute;
      transition: all 200ms linear;
      width: 100%;
    }

    ::after {
      top: ${({ active }) => (active ? '0.375rem' : '0rem')};
      transform: rotate(${({ active }) => (active ? '45deg' : '0deg')});
    }

    ::before {
      bottom: ${({ active }) => (active ? '0.375rem' : '0rem')};
      transform: rotate(${({ active }) => (active ? '-45deg' : '0deg')});
    }
  }

  .menu-text_visible {
    position: absolute;
    visibility: hidden;
  }

  &:hover,
  &:focus {
    outline-color: transparent;
  }

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`
