import { render } from '@testing-library/react'

import Badger from '.'

describe('<Badger />', () => {
  it('should render the Badger', () => {
    const { container } = render(<Badger color="red">Test</Badger>)

    expect(container).toHaveTextContent('Test')
  })

  it('checking if the Badger component contains the color attribute', () => {
    const { container } = render(<Badger color="red">Test</Badger>)

    expect(container.firstChild).toHaveAttribute('color', 'red')
  })
})
