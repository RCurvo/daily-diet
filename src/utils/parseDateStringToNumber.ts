import { parse } from 'date-fns'

export function parseDateStringToNumber(date: string) {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date())
  return Date.parse(parsedDate.toDateString())
}
