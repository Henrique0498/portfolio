import styled from 'styled-components'

export const _Container = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    width: 0.25rem;
    height: 0.25rem;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 -6px currentColor, 0 -6px currentColor, 0 6px currentColor,
      0 6px currentColor;
  }

  .menu-text_visible {
    position: absolute;
    visibility: hidden;
  }
`
