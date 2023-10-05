import { transparentize } from 'polished'
import styled from 'styled-components'

function getBackground(text: string, color: string) {
  const modifiedColor = color.replace('#', '')
  const newText = text.replace(/ /g, '%20')

  return `url(/api/v1/image/text?text=${newText}&opacity=0.3&color=${modifiedColor})`
}

export const _Container = styled.main`
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  overflow: hidden;

  .head_title {
    display: block;
    position: relative;
    width: fit-content;

    ::before {
      content: '';
      background-color: ${({ theme }) => theme.colors.gray[500]};
      bottom: -0.25rem;
      border-radius: 0.25rem;
      display: block;
      height: 1rem;
      position: absolute;
      right: -0.25rem;
      width: 1rem;
      z-index: 1;
    }

    h2 {
      position: relative;
      z-index: 2;
      ${({ theme }) => theme.text.heading[6]}
    }
  }
`

export const _Description = styled.section`
  display: flex;
  padding: 4rem 1rem;
  position: relative;
  width: 100%;
  justify-content: center;

  ::before {
    content: '';
    width: 100%;
    height: calc(100% + 17.5rem);
    background: ${({ theme }) => theme.colors.violet[500]};
    transform: skewY(-4deg);
    position: absolute;
    top: -8rem;
    background-image: ${({ theme }) =>
      getBackground('Henrique Lopes', theme.colors.violet[600])};
    left: 0;
  }

  .header {
    z-index: 2;
    position: relative;
    margin-bottom: 2rem;
  }

  .body {
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.violet[50]};
    padding: 1.5rem;
    position: relative;
    z-index: 4;

    ::before,
    ::after {
      background: transparent;
      content: '';
      height: 40%;
      position: absolute;
      width: 30%;
      z-index: 1;
      border-radius: 1rem;

      box-shadow: 0px 0px 0 0.75rem
        ${({ theme }) => transparentize(0.7, theme.colors.violet[50])};
    }

    ::before {
      left: -0rem;
      top: -0rem;
    }

    ::after {
      bottom: 0rem;
      right: 0rem;
    }

    p {
      position: relative;
      z-index: 2;

      b {
        color: ${({ theme }) => theme.colors.violet[600]};
      }
      a {
        color: ${({ theme }) => theme.colors.blue[700]};
      }
    }
  }

  .head_title::before {
    background-color: ${({ theme }) =>
      transparentize(0.5, theme.colors.violet[300])};
  }
`

export const _Technologies = styled.section`
  position: relative;
  padding: 5rem 1rem 8rem;
  width: 100%;

  ::before {
    content: '';
    width: 100%;
    height: calc(100% + 20rem);
    background: ${({ theme }) => theme.colors.gray[500]};
    transform: skewY(-4deg);
    position: absolute;
    top: -7.5rem;
    background-image: ${({ theme }) =>
      getBackground('tecnologias', theme.colors.gray[600])};
    left: 0;
  }

  .technologies_decorators {
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    height: 100%;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    padding: 1.5rem 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .technologies_main {
    margin: 0 auto;
    width: 100%;
    max-width: 1536px;
    position: relative;
    z-index: 2;
  }

  .head_title::before {
    background-color: ${({ theme }) => theme.colors.blue[400]};
  }
`
