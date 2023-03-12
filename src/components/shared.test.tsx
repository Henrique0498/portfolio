import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Title } from './sharedstyles'

describe('Teste', () => {
  it('Render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>Teste</Title>
      </ThemeProvider>
    )
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
