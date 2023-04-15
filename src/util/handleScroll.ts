import { MutableRefObject } from 'react'

export function handleScroll(element: MutableRefObject<HTMLElement>) {
  return () => {
    const scrollHeight = window.scrollY
    const isSmall = element.current?.getAttribute('scroll') === 'true'

    if (scrollHeight > 0 && !isSmall) {
      element.current?.setAttribute('scroll', 'true')
    } else if (isSmall && scrollHeight === 0) {
      element.current?.setAttribute('scroll', 'false')
    }
  }
}
