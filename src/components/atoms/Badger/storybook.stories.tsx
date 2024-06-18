import { Meta, StoryObj } from '@storybook/react'
import Badger from '.'

export default {
  title: 'atoms/Badger',
  component: Badger
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'badger',
    color: 'violet'
  }
}
