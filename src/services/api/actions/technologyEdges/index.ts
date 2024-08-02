import { Edge } from 'reactflow'
import api from '../..'

import { InPostDataTechnologyEdges } from './type'

const GET_TECHNOLOGY_EDGES = 'v1/technologyEdges'

export function getAllTechnologyEdges() {
  return api.get<Edge[]>(GET_TECHNOLOGY_EDGES).then(({ data }) => data)
}

export function postTechnologyEdges(data: InPostDataTechnologyEdges) {
  return api.post<Edge>(GET_TECHNOLOGY_EDGES, data).then(({ data }) => data)
}
