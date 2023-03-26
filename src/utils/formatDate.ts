import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'

export function formatDate(value: Date, typeFormat = 'dd MMM yyyy') {
  return format(value, typeFormat, {
    locale: ptBR
  })
}
