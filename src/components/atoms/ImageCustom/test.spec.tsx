import { render } from '@testing-library/react'

import ImageCustom from '.'

describe('<ImageCustom />', () => {
  it('should render the image', () => {
    const { container } = render(
      <ImageCustom
        alt="teste"
        src={
          'https://raw.githubusercontent.com/Henrique0498/Henrique0498/e297ec588fdbf835ce51e5ef7035bde86ee3b480/img/Logo.svg'
        }
        width={40}
        height={40}
        priority
        quality={100}
      />
    )

    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/Henrique0498/Henrique0498/e297ec588fdbf835ce51e5ef7035bde86ee3b480/img/Logo.svg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
