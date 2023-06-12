import styled from 'styled-components'

export const _Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
  margin: auto 0;
  overflow: hidden;
`
export const _Header = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  padding: 1rem;

  ::before {
    background: ${({ theme }) => theme.colors.red[500]};
    box-shadow: ${({ theme }) => theme.colors.yellow[500]} 1.5rem 0,
      ${({ theme }) => theme.colors.green[500]} 3rem 0;
    border-radius: 0.75rem;
    content: '';
    display: flex;
    height: 0.75rem;
    width: 0.75rem;
  }
`

export const _Body = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  max-width: 100%;
  overflow: auto;

  & > pre {
    padding: 1rem;
    width: fit-content;
  }

  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray[950]};
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 0.5rem;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`
