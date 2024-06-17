import { ComponentPropsWithRef } from 'react'
import { Prism } from 'react-syntax-highlighter'
import * as Themes from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './styles.module.scss'

type TyTheme = keyof typeof Themes

export interface InCoding extends ComponentPropsWithRef<'div'> {
  code: string
  lang?: 'javascript' | 'jsx' | 'typescript' | 'tsx'
  theme?: TyTheme
}

export default function Coding({
  code,
  className = '',
  lang = 'javascript',
  theme = 'oneDark',
  ...props
}: InCoding) {
  const themeStyles = Themes[theme]

  return (
    <div {...props} className={`${styles.container} ${className}`}>
      <div className={styles.header} />
      <Prism
        language={lang}
        style={themeStyles}
        className={`${styles.body} inset-0 leading-relaxed`}
      >
        {code}
      </Prism>
    </div>
  )
}
