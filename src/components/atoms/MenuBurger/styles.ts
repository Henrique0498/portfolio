import styled from 'styled-components'

export const _Container = styled.button`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 4px;
  justify-content: space-evenly;
  width: 40px;

  ::after,
  ::before {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 4px;
    content: '';
    height: 4px;
    width: 100%;
  }

  .menu-text_visible {
    position: absolute;
    visibility: hidden;
  }
`
