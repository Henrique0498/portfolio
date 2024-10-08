import { render } from '@testing-library/react'

import IconTech from '.'

describe('<IconTech />', () => {
  it('should render the icon', () => {
    const { container } = render(<IconTech icon="simple-icons:react" />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
