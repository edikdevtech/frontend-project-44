import readlineSync from 'readline-sync'
import { nameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function gamePrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    const randomNumber = Math.round(Math.random() * 10) + 1

    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      trueValue: ['yes'],
      falseValue: ['no'],
    })

    function isPrimeNumber(num) {
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

    if (isPrimeNumber(randomNumber) === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`Answer "no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${nameUser}!`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${nameUser}!`)
    }
  }
}
