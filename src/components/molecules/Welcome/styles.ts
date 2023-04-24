import styled from 'styled-components'

export const _Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;

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

  @media (min-width: 768px) {
    min-height: 40rem;
    justify-content: space-between;
  }
`
export const ContainerImage = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  padding: 0.75rem;

  ::before {
    content: '';
    width: 3.75rem;
    height: 3.75rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.violet[500]};
    left: 0rem;
    border-radius: 0.5rem;
    top: 0rem;
  }

  .container_photoUser {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0.75rem 0.75rem ${({ theme }) => theme.colors.blue[500]};
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export const ContainerText = styled.div`
  display: none;
  flex-direction: column;
  ${({ theme }) => theme.text.heading[3]};

  span {
    :first-child {
      color: ${({ theme }) => theme.colors.violet[500]};
    }

    :last-child {
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export const ContainerTextSpan = styled.span`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`
