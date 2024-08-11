import api from '../..'
import { InPostDataTechnologyTheme } from './types'

const GET_TECHNOLOGY_THEMES = 'v1/technology/themes'

export function postTechnologyTheme(data: InPostDataTechnologyTheme) {
  return api.post(GET_TECHNOLOGY_THEMES, data).then(({ data }) => data)
}
