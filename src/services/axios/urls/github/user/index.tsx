import { apiGithub } from 'services/axios'
import { TypeResponseGetUserByUsername } from './types'

export const GITHUB_GET_USER_BY_USERNAME = 'users/'

export async function getGithubUserById(username: string) {
  return await apiGithub.get<TypeResponseGetUserByUsername>(
    `${GITHUB_GET_USER_BY_USERNAME}${username}`
  )
}
