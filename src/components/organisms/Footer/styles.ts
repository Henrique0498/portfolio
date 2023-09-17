import styled from 'styled-components'

export const _Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
  width: 100%;
  z-index: 300;

  ul {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    a {
      display: flex;

      .link_icon {
        height: 1.5rem;
        margin-right: 0.5rem;
        width: 1rem;
      }
    }
  }
`
