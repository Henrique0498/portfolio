import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {},

  staticDirs: ['..\\public'],

  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
