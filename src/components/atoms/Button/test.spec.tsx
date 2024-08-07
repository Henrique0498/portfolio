import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button>botão</Button>)

    expect(container.firstChild).toBeInTheDocument()
  })
})
