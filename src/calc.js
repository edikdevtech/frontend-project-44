import readlineSync from 'readline-sync'
import { nameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function gameCalc() {
  console.log('What is the result of the expression?')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let randomNumber1 = Math.round(Math.random() * 10)
    let randomNumber2 = Math.round(Math.random() * 10)
    const calculationOperators = ['-', '+', '*']
    const randomOperator = calculationOperators[Math.floor(Math.random() * calculationOperators.length)]

    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`)

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

    const answer = parseInt(readlineSync.question('Your answer: '))

    if (answer === resultQuestion) {
      console.log('Correct!')
    }
    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${resultQuestion}".\nLet's try again, ${nameUser}`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${nameUser}!`)
    }
  }
}
