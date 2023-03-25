import styled, { css } from 'styled-components'
import { TypeComponentScrollTextStyled } from './types'

function teste(value) {
  return value
}

export const Container = styled.div<TypeComponentScrollTextStyled>`
  width: 100%;
  overflow: hidden;
  min-width: 3rem;

  > span {
    white-space: nowrap;
    display: inline-block;
    direction: ltr;
    pointer-events: none;
  }

  ${({ length }) => {
    if (length) {
      return css`
        position: relative;
        &:hover {
          span {
            transform: translateX(${teste(length) + 'px'});
            transition: ${-length * 0.03}s;
          }

          ::after {
            content: '';
            padding: 0;
          }
        }

        ::after {
          content: '...';
          width: fit-content;
          padding: 0 0 0 0.25rem;
          height: 100%;
          background: ${({ theme }) => theme.colors.gray[50]};
          z-index: 2;
          position: absolute;
          right: 0;
          top: 0;
        }
      `
    }
  }}
`
