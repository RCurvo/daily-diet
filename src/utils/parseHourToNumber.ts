export function parseHourToNumber(time: string) {
  const tensOfHours = Number(time[0]) * 10 * 60
  const hours = Number(time[1]) * 60
  const tensofMinutes = Number(time[3]) * 10
  const minutes = Number(time[4])
  const sum = tensOfHours + hours + tensofMinutes + minutes
  return sum
}
