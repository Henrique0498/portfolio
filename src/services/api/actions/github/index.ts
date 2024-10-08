import api from '../..'
import { InGetGitHubRepository } from './types'

const GET_GITHUB_REPOS = 'v1/github/repos'

type TypeForm = {
  name: string
  technologies: string[]
}

export async function getGithubRepos(data?: TypeForm) {
  let name = ''
  let topics = ''

  if (data?.name) {
    name = `&name=${data.name}`
  }
  if (data?.technologies) {
    topics = `&topics=${data.technologies.join(',')}`
  }

  return api
    .get<
      InGetGitHubRepository[]
    >(`${GET_GITHUB_REPOS}?per_page=12${name}${topics}`)
    .then(({ data }) => data)
}
