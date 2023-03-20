import styled from 'styled-components'

export const _Container = styled.ul`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.5rem;
`

export const _List = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  &:last-child {
    border: none;
  }
`

export const _Header = styled.div`
  padding-bottom: 0.5rem;

  .header_title {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`

export const _Badges = styled.div``

export const _Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
`

export const _Title = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray[500]};

  .title_icon {
    height: 1.5rem;
    margin-right: 0.5rem;
    width: 1.5rem;
  }
`
