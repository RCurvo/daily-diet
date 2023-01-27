import { format } from 'date-fns'

export function parseDateToDateString(date: Date) {
  return format(date, 'dd/MM/yyyy')
}
