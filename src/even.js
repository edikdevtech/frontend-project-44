import readlineSync from 'readline-sync'
import { nameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let randomNumber = Math.round(Math.random() * 100) + 1
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      trueValue: ['yes'],
      falseValue: ['no'],
    })

    if (randomNumber % 2 === 0) {
      if (answer === true) {
        console.log('Correct!')
      }
      else if (answer === false) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${nameUser}`)
        break
      }
    }
    else {
      if (answer === false) {
        console.log('Correct!')
      }
      else if (answer === true) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameUser}!`)
        break
      }
    }
    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${nameUser}!`)
    }
  }
}
