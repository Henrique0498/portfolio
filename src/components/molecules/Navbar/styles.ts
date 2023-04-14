import styled from 'styled-components'

export const Container = styled.nav`
  display: none;

  .nav_list {
    display: flex;
    gap: 1rem;

    .list_link {
      span {
        color: ${({ theme }) => theme.colors.gray[50]};
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`
