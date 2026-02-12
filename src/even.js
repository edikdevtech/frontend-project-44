import readlineSync from 'readline-sync'
import { getNameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      trueValue: 'yes',
      falseValue: 'no',
    })

    const isEven = randomNumber % 2 === 0
    const isCorrect = isEven ? answer === true : answer === false

    if (isCorrect) {
      console.log('Correct!')

      if (i === numberOfQuestionsInGame) {
        console.log(`Congratulations, ${getNameUser()}!`)
      }
    }
    else {
      const correctAnswer = isEven ? 'yes' : 'no'
      const userAnswer = answer ? 'yes' : 'no'

      console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${getNameUser()}`)
      return
    }
  }
}
