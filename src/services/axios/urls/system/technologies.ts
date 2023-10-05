import { TypeReturnApiTechnologies } from 'pages/api/v1/technologies'
import { apiSystem } from 'services/axios'

export const SYSTEM_GET_TECHNOLOGIES = 'api/v1/technologies'

export function getSystemTechnologies() {
  return apiSystem.get<TypeReturnApiTechnologies[]>(SYSTEM_GET_TECHNOLOGIES)
}
