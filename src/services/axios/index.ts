import axios from 'axios'

const gitToken = process.env.GIT_TOKEN

export const apiGithub = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: gitToken
  }
})
