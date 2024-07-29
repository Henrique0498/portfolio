import api from '../..'
import { InNodeTechnologies, InResponseTechnologies } from './types'

const GET_TECHNOLOGIES = 'v1/technologies'

export function getAllTechnologies() {
  return api
    .get<InResponseTechnologies[]>(GET_TECHNOLOGIES)
    .then(({ data }) => transformTechnology(data))
}

function transformTechnology(value: InResponseTechnologies[]) {
  const result: InNodeTechnologies[] = value.map(
    ({ id, type, position, ...data }: InResponseTechnologies) => ({
      id,
      type,
      position,
      data
    })
  )

  return result
}
