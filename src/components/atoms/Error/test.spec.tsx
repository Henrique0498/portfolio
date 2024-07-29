import { render } from '@testing-library/react'

import Error from '.'

describe('<Error />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Error label="Teste" handleReloading={() => console.log('teste')} />
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
