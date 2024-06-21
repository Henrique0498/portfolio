import { render, screen } from '@testing-library/react'

import NavLink from '.'

describe('<NavLink />', () => {
  it('should render the link', () => {
    render(<NavLink href="/testing">NavLink</NavLink>)

    expect(screen.getByRole('link', { name: /NavLink/i })).toBeInTheDocument()
  })

  it('checking if the Link component contains the href attribute', () => {
    const { container } = render(<NavLink href="/testing">NavLink</NavLink>)

    expect(container.firstChild).toHaveAttribute('href', '/testing')
  })
})
