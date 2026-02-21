import getRandomRange from '../getRandomRange.js'
import makeRound from '../index.js'
import hiUser from '../cli.js'

const textQuestionEven = 'Answer "yes" if the number is even, otherwise answer "no".'
hiUser()
function generationRoundGameEven() {
  const isEven = num => num % 2 === 0
  const randomNumber = getRandomRange(1, 100)
  const isEvenRandomNumber = isEven(randomNumber) ? 'yes' : 'no'

  return {
    question: randomNumber,
    correсtAnswer: isEvenRandomNumber,
  }
}

export default function evenGame() {
  makeRound(generationRoundGameEven, textQuestionEven)
}
