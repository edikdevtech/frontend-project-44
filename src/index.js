export const numberOfQuestionsInGame = 3

export function isPrimeNumber(num) {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export function findNod(a, b) {
  let bigNum = Math.max(a, b)
  let smallNum = Math.min(a, b)

  while (smallNum !== 0) {
    if (bigNum % smallNum === 0) {
      return smallNum
    }
    else {
      let temp = smallNum
      smallNum = bigNum % smallNum
      bigNum = temp
    }
  }
  return bigNum
}

export function progressionCode(start, step, length, empty, array) {
  let resultArrUser = []

  const lengthProgression = Math.min(length, 10)

  for (let i = 0; i < lengthProgression; i++) {
    if (i === empty) {
      resultArrUser.push('..')
      array.push(start + i * step)
    }
    else {
      resultArrUser.push(start + i * step)
    }
  }
  return resultArrUser.join(', ')
}
