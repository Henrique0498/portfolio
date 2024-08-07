import { render } from '@testing-library/react'

import IconLink from '.'

describe('<IconLink />', () => {
  it('should render', () => {
    const { container } = render(
      <IconLink
        content="teste"
        href="/teste"
        icon="simple-icons:testinglibrary"
      />
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
