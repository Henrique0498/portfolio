import { NextApiRequest, NextApiResponse } from 'next'

interface TypeFunctionGetSvg {
  primaryColor: string
  secondColor: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { primaryColor = 'rgb(0,0,0,0.5)', secondColor = 'rgb(0,0,0,0.04)' } =
    req.query

  if (typeof primaryColor !== 'string' || typeof secondColor !== 'string') {
    res.status(400).json({ message: 'color invalid' })
  } else {
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )

    const modifiedPrimaryColor = primaryColor.includes('rgb')
      ? primaryColor
      : '#' + primaryColor
    const modifiedSecondColor = secondColor.includes('rgb')
      ? secondColor
      : '#' + secondColor

    return res.end(
      getSvg({
        primaryColor: modifiedPrimaryColor,
        secondColor: modifiedSecondColor
      })
    )
  }
}

function getSvg({ primaryColor, secondColor }: TypeFunctionGetSvg): string {
  return `
    <svg width='100' height='160' viewBox='0 0 100 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d="M56.3224 5.26371C57.4727 2.10342 60.4768 0 63.8399 0H92C96.4183 0 100 3.58172 100 8V152C100 156.418 96.4183 160 92 160H0L56.3224 5.26371Z" fill="${secondColor}"/>
      <path d="M62.3223 5.26371C63.4727 2.10341 66.4767 0 69.8398 0H92C96.4183 0 100 3.58172 100 8V152C100 156.418 96.4183 160 92 160H6L62.3223 5.26371Z" fill="${primaryColor}"/>
    </svg>
  `
}
