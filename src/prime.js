import readlineSync from 'readline-sync'
import getNameUser from '../src/cli.js'
import { numberOfQuestionsInGame, isPrimeNumber } from '../src/index.js'

export default function gamePrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1

    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      trueValue: ['yes'],
      falseValue: ['no'],
    })

    if (isPrimeNumber(randomNumber) === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`Answer "no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${getNameUser()}!`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${getNameUser()}!`)
    }
  }
}
