import { NextApiRequest, NextApiResponse } from 'next'

export type TypeReturnApiTechnologies = (typeof technologies)[0]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(technologies)
}

const technologies = [
  {
    id: 'typescript',
    title: 'Typescript',
    image: {
      item: 'images/icons/TypeScript.svg',
      background:
        'api/v1/image/cardbackground?secondColor=262626&primaryColor=3178C6'
    },
    link: 'https://www.typescriptlang.org/pt/'
  },
  {
    id: 'react',
    title: 'React',
    image: {
      item: 'images/icons/React.svg',
      background:
        'api/v1/image/cardbackground?secondColor=191B21&primaryColor=149ECA'
    },
    link: 'https://pt-br.reactjs.org/'
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    image: {
      item: 'images/icons/Next.svg',
      background:
        'api/v1/image/cardbackground?secondColor=000000&primaryColor=0070F3'
    },
    link: 'https://nextjs.org/'
  },
  {
    id: 'nestjs',
    title: 'Nest.js',
    image: {
      item: 'images/icons/Nest.svg',
      background:
        'api/v1/image/cardbackground?secondColor=111111&primaryColor=E0234E'
    },
    link: 'https://nestjs.com/'
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    image: {
      item: 'images/icons/GraphQL.svg',
      background:
        'api/v1/image/cardbackground?secondColor=111111&primaryColor=E535AB'
    },
    link: 'https://graphql.org/'
  },
  {
    id: 'jest',
    title: 'Jest',
    image: {
      item: 'images/icons/Jest.svg',
      background:
        'api/v1/image/cardbackground?secondColor=20232A&primaryColor=15C213'
    },
    link: 'https://jestjs.io/pt-BR/docs/getting-started'
  },
  {
    id: 'storybook',
    title: 'Storybook',
    image: {
      item: 'images/icons/Storybook.svg',
      background:
        'api/v1/image/cardbackground?secondColor=171C23&primaryColor=FF4785'
    },
    link: 'https://storybook.js.org/'
  },
  {
    id: 'styledcomponents',
    title: 'styled-component',
    image: {
      item: 'images/icons/Styled-Components.svg',
      background:
        'api/v1/image/cardbackground?secondColor=27212E&primaryColor=BF4F74'
    },
    link: 'https://styled-components.com/'
  }
]
