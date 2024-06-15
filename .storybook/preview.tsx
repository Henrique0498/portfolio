import type { Preview } from '@storybook/react'
import React from 'react'

import '../src/styles/global.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  tags: ['autodocs']
}

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  )
]

export default preview
