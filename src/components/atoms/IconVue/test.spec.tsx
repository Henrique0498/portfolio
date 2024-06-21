import { render } from '@testing-library/react'

import IconVue from '.'

describe('<IconVue />', () => {
  it('should render', () => {
    const { container } = render(<IconVue />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
