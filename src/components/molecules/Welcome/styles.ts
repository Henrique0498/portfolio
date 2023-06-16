import styled from 'styled-components'

export const _Container = styled.div`
  background-image: url('/images/background-circles-arrow.svg');
  background-repeat: no-repeat;
  background-size: auto 60%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: fit-content;
  max-width: 1536px;
  padding: 1rem;
  position: relative;
  width: 100%;
  z-index: 10;

  .badgers {
    display: flex;
    gap: 0.5rem;
  }
`

export const _Presentation = styled.div``

export const _ContainerText = styled.div`
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
  display: flex;
  justify-content: flex-end;
  max-width: 100%;

  & > .code {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`
