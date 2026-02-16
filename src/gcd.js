import readlineSync from 'readline-sync'
import getNameUser from '../src/cli.js'
import { numberOfQuestionsInGame, findNod } from '../src/index.js'

export default function gameGcd() {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let randomNumber1 = Math.floor(Math.random() * 100) + 1
    let randomNumber2 = Math.floor(Math.random() * 100) + 1

    console.log(`Question ${randomNumber1} ${randomNumber2}`)
    const answer = Number.parseInt(readlineSync.question('Your answer: '))

    let nod = findNod(randomNumber1, randomNumber2)

    if (answer === nod) {
      console.log('Correct!')
    }
    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${nod}".\nLet's try again, ${getNameUser()}!`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${getNameUser()}!`)
    }
  }
}
