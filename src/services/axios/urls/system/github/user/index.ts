import { apiSystem } from 'services/axios'
import { TypeResponseGetUserByUsername } from 'services/axios/urls/github/user/types'

export const GITHUB_GET_USER_BY_USERNAME = 'api/github/users/'

export function getSystemGithubUserById(username: string) {
  return apiSystem.get<TypeResponseGetUserByUsername>(
    `${GITHUB_GET_USER_BY_USERNAME}${username}`
  )
}
