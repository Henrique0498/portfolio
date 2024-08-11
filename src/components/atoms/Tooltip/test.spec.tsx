import { render } from '@testing-library/react'

import Tooltip from '.'

describe('<Tooltip />', () => {
  it('should render', () => {
    const { container } = render(
      <Tooltip>
        <span>teste</span>
      </Tooltip>
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
