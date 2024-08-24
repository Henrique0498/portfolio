import { render, screen } from '@testing-library/react'

import Link from '.'

describe('<Link />', () => {
  it('should render the link', () => {
    render(<Link href="/testing">Link</Link>)

    expect(screen.getByRole('link', { name: /Link/i })).toBeInTheDocument()
  })

  it('checking if the Link component contains the href attribute', () => {
    const { container } = render(<Link href="/testing">Link</Link>)

    expect(container.firstChild).toHaveAttribute('href', '/testing')
  })
})
