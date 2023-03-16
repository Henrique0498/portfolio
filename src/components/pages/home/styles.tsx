import styled from 'styled-components'

export const _Container = styled.div``

export const _Description = styled.div`
  height: 50rem;
  padding: 10rem 0;
  display: flex;
  align-items: center;

  p {
    color: #fff;
    z-index: 1;
  }

  .description_background {
    background: ${({ theme }) => theme.colors.violet[500]};
    height: 40rem;
    transform: skew(0deg, -0.18rad);
    position: absolute;
    width: 100%;
    z-index: 0;
  }
`
