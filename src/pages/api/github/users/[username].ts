import { AxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { getGithubUserById } from 'services/axios/urls/github/user'

import {
  TypeResponseErrorUserByUsername,
  TypeResponseGetUserByUsername,
  TypeResponseGitHubErrorUserByUsername
} from 'services/axios/urls/github/user/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    TypeResponseGetUserByUsername | TypeResponseErrorUserByUsername
  >
) {
  try {
    const { username } = req.query

    if (typeof username !== 'string') {
      res.status(400).json({ message: 'username invalid' })
    } else {
      await getGithubUserById(username)
        .then(({ data }) => {
          res.status(200).json(data)
        })
        .catch((e: AxiosError<TypeResponseGitHubErrorUserByUsername>) => {
          res.status(404).json({ message: e.response.data.message })
        })
    }
  } catch (err) {
    res.status(500).json({ message: 'failed to load data' })
  }
}
