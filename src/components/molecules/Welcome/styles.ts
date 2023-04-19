import styled from 'styled-components'

export const _Container = styled.div`
  height: 100vh;
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
export const ContainerLarge = styled.div`
  .container_photo {
    position: relative;
    display: flex;
    justify-content: center;

    ::before {
      width: 110%;
      position: absolute;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.red[800]};
    }
  }

  .container_photoUser {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 1rem -1rem ${({ theme }) => theme.colors.gray[800]};
  }
`
