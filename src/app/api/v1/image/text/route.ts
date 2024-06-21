import { NextRequest, NextResponse } from 'next/server'

interface TypeFunctionGetSvg {
  text: string
  color: string
  opacity: string
}

interface TypeFunctionMountBodySvg extends TypeFunctionGetSvg {
  slice: number
  sliceOrderReverse: boolean
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const color = searchParams.get('color') || 'rgb(0,0,0,0.04)'
  const opacity = searchParams.get('opacity') || '1'

  if (typeof text !== 'string') {
    return NextResponse.json({ message: 'text invalid' }, { status: 400 })
  } else if (typeof color !== 'string') {
    return NextResponse.json({ message: 'color invalid' }, { status: 400 })
  } else if (typeof opacity !== 'string') {
    return NextResponse.json({ message: 'opacity invalid' }, { status: 400 })
  } else {
    const headers = new Headers({
      'Content-Type': 'image/svg+xml',
      'Cache-Control':
        'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    })

    const modifiedColor = color.includes('rgb') ? color : '#' + color

    const svgContent = getSvg({
      color: modifiedColor,
      text,
      opacity
    })

    return new NextResponse(svgContent, { headers })
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
