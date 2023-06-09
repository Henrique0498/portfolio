import styled from 'styled-components'

export const _Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: calc(6.25rem - 6rem);
  height: 100vh;
  max-width: 1536px;
  padding: 1rem;
  width: 100%;

  position: relative;
  background-image: url('/images/background-circles-arrow.svg');
  background-size: auto 60%;
  background-repeat: no-repeat;

  .badgers {
    display: flex;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    min-height: 40rem;
    justify-content: space-between;
  }
`

export const _Presentation = styled.div`
  padding-top: 5rem;
`

export const ContainerText = styled.div`
  display: flex;
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
`

export const _Coding = styled.div`
  width: 400px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[200]};
`
