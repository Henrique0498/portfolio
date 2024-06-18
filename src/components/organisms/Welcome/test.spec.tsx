import { render } from '@testing-library/react'

import Welcome from '.'

describe('<Badger />', () => {
  it('should render the Badger', () => {
    const { container } = render(<Welcome />)

    expect(container).toHaveTextContent('Front-End Developer.')
  })
})
