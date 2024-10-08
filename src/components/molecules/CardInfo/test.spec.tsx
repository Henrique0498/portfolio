import { render } from '@testing-library/react'

import CardInfo from '.'

describe('<CardInfo />', () => {
  it('should render the card', () => {
    const { container } = render(<CardInfo icon="" title="teste" />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
