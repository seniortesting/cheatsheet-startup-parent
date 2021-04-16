/**
 * 得到最小的和最大的数之间的随机数，包含最小值和最大值
 * @param min
 * @param max
 * @returns {number}
 */
const randomNumber = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const number = Math.floor(Math.random() * (max - min + 1)) + min
  // const number = Math.random() * (max - min) + min  ,不包含最大值，只包含最小值
  return number
}

export { randomNumber }
