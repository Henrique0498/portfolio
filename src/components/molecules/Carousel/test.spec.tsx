import { render } from '@testing-library/react'

import Carousel from '.'

describe('<Carousel />', () => {
  it('should render the heading', () => {
    const { container } = render(<Carousel />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
