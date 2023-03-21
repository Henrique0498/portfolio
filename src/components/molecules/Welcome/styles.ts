import styled from 'styled-components'

export const _Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    position: relative;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.colors.blue[600]};

    &::before {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      display: block;
      right: -4px;
      background: ${({ theme }) => theme.colors.blue[600]};
      animation: visiblePipe 700ms infinite;
    }

    @keyframes visiblePipe {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }
  }
`
