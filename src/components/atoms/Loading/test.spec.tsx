import { render } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
