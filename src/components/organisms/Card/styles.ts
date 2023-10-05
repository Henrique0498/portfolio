import { Card, CardBody } from '@nextui-org/react'

import styled from 'styled-components'
import { TypeStyledCardBody } from './types'

export const _Container = styled(Card)``

export const _Body = styled(CardBody)<TypeStyledCardBody>`
  padding: 1rem;
  height: 10rem;
  background-image: ${({ imageBackground }) => `url(${imageBackground})`};
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto 100%;
  display: grid;
  grid-template-columns: 1fr 84px;

  & > .container_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > .container_image {
    padding-left: 1rem;

    & > .image {
      background-color: white;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`
