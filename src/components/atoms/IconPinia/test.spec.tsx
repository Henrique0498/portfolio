import { render } from '@testing-library/react'

import IconPinia from '.'

describe('<IconPinia />', () => {
  it('should render', () => {
    const { container } = render(<IconPinia />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
