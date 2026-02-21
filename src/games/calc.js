import hiUser from '../cli.js'
import getRandomRange from '../getRandomRange.js'
import makeRound from '../index.js'

const textQuestionCalc = 'What is the result of the expression?'

hiUser()

function generationRoundGameCalc() {
  let randomNumber1 = getRandomRange(1, 100)
  let randomNumber2 = getRandomRange(1, 10)
  const calculationOperators = ['-', '+', '*']
  const randomOperator = calculationOperators[getRandomRange(0, 2)]
  const expressionWithRandomVariables = `${randomNumber1} ${randomOperator} ${randomNumber2}`

  let resultQuestion

  if (randomOperator === '+') {
    resultQuestion = randomNumber1 + randomNumber2
  }
  else if (randomOperator === '-') {
    resultQuestion = randomNumber1 - randomNumber2
  }
  else if (randomOperator === '*') {
    resultQuestion = randomNumber1 * randomNumber2
  }

  return {
    question: expressionWithRandomVariables,
    correсtAnswer: String(resultQuestion)
  }
}

export default function gameCalc() {
  makeRound(generationRoundGameCalc, textQuestionCalc)
}

