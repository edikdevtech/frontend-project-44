import hiUser from '../cli.js'
import makeRound from '../index.js'
import getRandomRange from '../getRandomRange.js'

const textQuestionGcd = 'Find the greatest common divisor of given numbers.'

hiUser()

function findNod(a, b) {
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

function generationRoundGameGcd() {
  let randomNumber1 = getRandomRange(1, 100)
  let randomNumber2 = getRandomRange(1, 100)

  const nodOfTwoNumbers = findNod(randomNumber1, randomNumber2)

  const expressionWithRandomVariables = `${randomNumber1} ${randomNumber2}`

  return {
    question: expressionWithRandomVariables,
    correсtAnswer: String(nodOfTwoNumbers)
  }
}

export default function gameGcd() {
  makeRound(generationRoundGameGcd, textQuestionGcd)
}

