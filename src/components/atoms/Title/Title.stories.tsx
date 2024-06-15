import { Meta, StoryObj } from '@storybook/react'

import Title from '.'

export default {
  title: 'Title',
  component: Title
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Title',
    className: 'text-3xl text-blue-600 dark:text-red-600'
  }
}
