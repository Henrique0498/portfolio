import api from '../..'
import {
  InNodeTechnologies,
  InPostDataTechnology,
  InResponseTechnologies
} from './types'

const GET_TECHNOLOGIES = 'v1/technologies'

export function getAllTechnologies() {
  return api
    .get<InResponseTechnologies[]>(GET_TECHNOLOGIES)
    .then(({ data }) => transformTechnology(data))
}

export function postTechnologies(data: InPostDataTechnology) {
  return api
    .post<InResponseTechnologies>(GET_TECHNOLOGIES, data)
    .then(({ data }) => data)
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
