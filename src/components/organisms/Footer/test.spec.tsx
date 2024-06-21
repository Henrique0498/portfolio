import { render } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
