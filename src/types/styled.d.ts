import 'styled-components'
import { theme } from '../styles/theme'

type Theme = typeof theme.colors

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
  }
}
