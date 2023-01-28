/* eslint-disable no-self-assign */
export function healthBestSequence(array) {
  let count = 0
  let maxCount = 0

  function healthByDay(array) {
    array.map((object) => {
      if (object.mealType === 'healthy') {
        count = count + 1
        count > maxCount ? (maxCount = count) : (maxCount = maxCount)
      } else {
        count = 0
      }
    })
    return maxCount
  }

  function healthyTotal(array) {
    array.map((item) => {
      return healthByDay(item.data)
    })
    return maxCount
  }

  healthyTotal(array)
  return maxCount
  //   return healthBestSequence(array).maxCount
}
