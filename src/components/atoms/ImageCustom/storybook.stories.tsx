import type { Meta, StoryObj } from '@storybook/react'

import Image from '.'

export default {
  title: 'atoms/ImageCustom',
  component: Image
} as Meta

export const Default: StoryObj = {
  args: {
    alt: 'Image',
    src: 'https://raw.githubusercontent.com/Henrique0498/Henrique0498/e297ec588fdbf835ce51e5ef7035bde86ee3b480/img/Logo.svg',
    width: 40,
    height: 40,
    priority: true,
    quality: 100
  }
}
