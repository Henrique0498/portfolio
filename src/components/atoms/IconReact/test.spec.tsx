import { render } from '@testing-library/react'

import IconReact from '.'

describe('<IconReact />', () => {
  it('should render the IconReact', () => {
    const { container } = render(<IconReact />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
