import type { Preview } from '@storybook/react'
import React from 'react'

import {
  font_type_primary,
  font_type_secondary
} from './../src/functions/fonts'

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
    <div
      className={`${font_type_primary.variable} ${font_type_secondary.variable}`}
      style={{ minHeight: '80px' }}
    >
      <Story />
    </div>
  )
]

export default preview
