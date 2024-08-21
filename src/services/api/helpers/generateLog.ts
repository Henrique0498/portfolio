import axios from 'axios'
import { TyResponsePostAuth } from '../types'

interface InPostGenerateLog {
  error: {
    message: string
    stack: string
  }
  route: string
}

export default async function generateLog(data: InPostGenerateLog) {
  return await axios.post<TyResponsePostAuth>(
    'http://localhost:3000/api/v1/error/log',
    data
  )
}
