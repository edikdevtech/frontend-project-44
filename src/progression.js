import readlineSync from 'readline-sync'
import getNameUser from '../src/cli.js'
import { numberOfQuestionsInGame, progressionCode } from '../src/index.js'

export default function progression() {
  console.log('What number is missing in the progression?')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let startNum = Math.round(Math.random() * 10) + 1
    let stepNum = Math.round(Math.random() * 10) + 1
    let lengthNum = Math.round(Math.random() * 10) + 10
    let emptyNum = Math.round(Math.random() * 10)
    let resultArrAuthor = []

    console.log(`Question: ${progressionCode(startNum, stepNum, lengthNum, emptyNum, resultArrAuthor)}`)
    const answer = Number.parseInt(readlineSync.question('Your answer: '))

    if (answer === resultArrAuthor[0]) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultArrAuthor[0]}.\nLet's try again, ${getNameUser()}!`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${getNameUser()}!`)
    }
  }
}
