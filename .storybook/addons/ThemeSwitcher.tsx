import React, { useState } from 'react'
import { addons, types } from '@storybook/manager-api'
import { IconButton } from '@storybook/components'

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const iframe = document.getElementById(
      'storybook-preview-iframe'
    ) as HTMLIFrameElement

    if (iframe && iframe.contentDocument) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow?.document

      if (iframeDocument && iframeDocument.body) {
        if (isDark) {
          iframeDocument.body.classList.remove('dark')
        } else {
          iframeDocument.body.classList.add('dark')
        }

        setIsDark((value) => !value)
      }
    }
  }

  return (
    <IconButton key="theme" title="Toggle theme" onClick={toggleTheme}>
      {isDark ? '🌙' : '☀️'}
    </IconButton>
  )
}

addons.register('my/theme-switcher', () => {
  addons.add('my/theme-switcher/panel', {
    type: types.TOOL,
    title: 'Theme Switcher',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: ThemeSwitcher
  })
})
