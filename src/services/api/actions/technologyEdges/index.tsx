import { Edge } from 'reactflow'
import api from '../..'

const GET_TECHNOLOGY_EDGES = 'v1/technologyEdges'

export function getAllTechnologyEdges() {
  return api.get<Edge[]>(GET_TECHNOLOGY_EDGES).then(({ data }) => data)
}
