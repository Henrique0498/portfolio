import api from '../..'
import { InGetProjectsMain } from './types'

const GET_PROJECTS_MAIN = 'v1/projectsMain'

export async function getProjectsMain() {
  return api
    .get<InGetProjectsMain[]>(GET_PROJECTS_MAIN)
    .then(({ data }) => data)
}
