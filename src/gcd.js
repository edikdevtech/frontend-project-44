import readlineSync from 'readline-sync'
import { nameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function gameGcd() {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let randomNumber1 = Math.round(Math.random() * 100) + 1
    let randomNumber2 = Math.round(Math.random() * 100) + 1

    console.log(`Question ${randomNumber1} ${randomNumber2}`)
    const answer = Number.parseInt(readlineSync.question('Your answer: '))
    let resultArr = []

    for (let i = 1; i <= randomNumber1; i++) {
      if (randomNumber1 % i === 0) {
        resultArr.push(i)
      }
    }

    for (let i = 1; i <= randomNumber2; i++) {
      if (randomNumber2 % i === 0) {
        resultArr.push(i)
      }
    }

    const dublicates = resultArr.filter(function firstEntry(item, index, resultArr) {
      if (resultArr.indexOf(item) !== index) {
        return item
      }
    })

    let maxNumberArr = Math.max(...dublicates)

    if (answer === maxNumberArr) {
      console.log('Correct!')
    }
    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${maxNumberArr}".\nLet's try again, ${nameUser}`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${nameUser}!`)
    }
  }
}
