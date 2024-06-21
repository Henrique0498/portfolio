import { render } from '@testing-library/react'

import Coding from '.'
import { Suspense } from 'react'

describe('<Coding />', () => {
  it('should render the link', () => {
    const { container } = render(
      <Suspense>
        <Coding code="console.log('teste)" className="testing" />
      </Suspense>
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
