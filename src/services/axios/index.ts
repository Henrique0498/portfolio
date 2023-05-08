import axios from 'axios'

const gitToken = process.env.GIT_TOKEN

const baseURL = process.env.LOCAL_BASE_URL

export const apiGithub = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `bearer ${gitToken}`
  }
})

export const apiSystem = axios.create({
  baseURL: baseURL
})
