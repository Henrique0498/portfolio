import { render } from '@testing-library/react'

import Coding from '.'
import { Suspense } from 'react'
import { ClientProviders } from '@/app/providers'

describe('<Coding />', () => {
  it('should render the link', () => {
    const { container } = render(
      <ClientProviders>
        <Suspense>
          <Coding
            code="console.log('teste)"
            className="testing"
            breadcrumbs=""
            lang="abap"
            theme="andromeeda"
            title=""
          />
        </Suspense>
      </ClientProviders>
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
