import hiUser from '../cli.js'
import makeRound from '../index.js'
import getRandomRange from '../getRandomRange.js'

const textQuestionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".'

hiUser()

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

function generationRoundGamуPrime() {
  const randomNumber = getRandomRange(1, 99)

  const isRandomNumberPrime = isPrimeNumber(randomNumber) ? 'yes' : 'no'

  return {
    question: randomNumber,
    correсtAnswer: isRandomNumberPrime,
  }
}

export default function primeGame() {
  makeRound(generationRoundGamуPrime, textQuestionPrime)
}
