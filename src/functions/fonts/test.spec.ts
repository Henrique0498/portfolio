import { font_type_coding, font_type_primary, font_type_secondary } from './'

describe('<IconPinia />', () => {
  it('Checking if the correct CSS variable is being passed', () => {
    expect(font_type_primary.variable === '--font-type-primary')

    expect(font_type_secondary.variable === '--font-type-secondary')

    expect(font_type_coding.variable === '--font-type-coding')
  })
})
