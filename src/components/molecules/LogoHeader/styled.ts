import styled from 'styled-components'

export const _Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;

  h1 {
    ${({ theme }) => theme.text.body.mdBold}
    width: 4.5rem;
    line-height: 1.375rem;
  }
`

export const _ContainerImage = styled.div`
  align-items: center;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2px;
  position: relative;

  ::before {
    animation: backgroundAnimation 3s infinite ease-in-out;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.pink[500]} 0%,
      ${({ theme }) => theme.colors.violet[500]} 100%
    );
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }

  > div {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.125rem;
  }

  @keyframes backgroundAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
