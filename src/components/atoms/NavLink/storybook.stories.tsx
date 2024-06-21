import { Meta, StoryObj } from '@storybook/react'
import NavLink from '.'

export default {
  title: 'atoms/NavLink',
  component: NavLink
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Navegando',
    href: '#'
  }
}
