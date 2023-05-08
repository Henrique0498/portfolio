import { atom } from 'recoil'

import { TypeResponseGetUserByUsername } from 'services/axios/urls/github/user/types'

export const storeGithubUserByUsername = atom<TypeResponseGetUserByUsername>({
  key: 'githubUserByUsername',
  default: null
})
