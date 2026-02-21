import readlineSync from 'readline-sync'
import { getNameUser } from '../src/cli.js'

export default function makeRound(generationRound, descriptionTextGame) {
  const numberOfQuestionsInGame = 3
  const userName = getNameUser()
  console.log(descriptionTextGame)

  for (let i = 0; i < numberOfQuestionsInGame; i++) {
    const round = generationRound()

    const question = round.question
    const correctAnswer = round.correсtAnswer

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if(correctAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)

      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
