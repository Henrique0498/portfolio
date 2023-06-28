import { NextApiRequest, NextApiResponse } from 'next'

interface TypeFunctionGetSvg {
  text: string
  color: string
  opacity: string
}

interface TypeFunctionMountBodySvg extends TypeFunctionGetSvg {
  slice: number
  sliceOrderReverse: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text, color = 'rgb(0,0,0,0.04)', opacity = '1' } = req.query

  if (typeof text !== 'string') {
    res.status(400).json({ message: 'text invalid' })
  } else if (typeof color !== 'string') {
    res.status(400).json({ message: 'color invalid' })
  } else if (typeof opacity !== 'string') {
    res.status(400).json({ message: 'opacity invalid' })
  } else {
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )
    const modifiedColor = color.includes('rgb') ? color : '#' + color

    return res.end(
      getSvg({
        color: modifiedColor,
        text,
        opacity
      })
    )
  }
}

function getSvg(props: TypeFunctionGetSvg): string {
  const header =
    "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='200px'>"
  const footer = '</svg>'

  return `
    ${header}
      ${mountBodySvg({ ...props, slice: 0, sliceOrderReverse: true })}
      ${mountBodySvg({ ...props, slice: 3, sliceOrderReverse: false })}
      ${mountBodySvg({ ...props, slice: 3, sliceOrderReverse: true })}
    ${footer}
  `
}

function mountBodySvg({
  color,
  opacity,
  slice,
  sliceOrderReverse,
  text
}: TypeFunctionMountBodySvg) {
  const repeat = slice === 0 ? 16 : 17
  const propsX = 5 * 0
  const propsY = slice === 0 ? '27%' : sliceOrderReverse ? '93%' : '60%'
  const header = `<text x='${propsX}' y='${propsY}' fill='${color}' opacity='${opacity}' font-size='4rem' font-weight='600' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>`
  const footer = '</text>'

  const arrayWords = []

  for (let i = 0; i <= repeat; i++) {
    if (i !== 0 && i !== repeat) {
      arrayWords.push(text)
    } else if (i === 0) {
      const newText = sliceOrderReverse
        ? text.slice(slice, text.length)
        : text.slice(text.length - slice)

      arrayWords.push(newText)
    } else {
      const newText = sliceOrderReverse
        ? text.slice(text.length - slice)
        : text.slice(slice, text.length)
      arrayWords.push(newText)
    }
  }

  return `${header}${arrayWords.join(' ')}${footer}`
}
