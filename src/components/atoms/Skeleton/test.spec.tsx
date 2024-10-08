import { render } from '@testing-library/react'

import Skeleton from '.'

describe('<Skeleton />', () => {
  it('should render the skeleton', () => {
    const { container } = render(<Skeleton>teste</Skeleton>)

    expect(container.firstChild).toBeInTheDocument()
  })
})
