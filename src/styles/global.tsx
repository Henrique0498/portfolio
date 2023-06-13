import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    padding: 6.25rem 0 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
