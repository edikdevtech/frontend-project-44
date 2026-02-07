import readlineSync from 'readline-sync'
import { nameUser } from '../src/cli.js'
import { numberOfQuestionsInGame } from '../src/index.js'

export default function progression() {
  console.log('What number is missing in the progression?')

  for (let i = 1; i <= numberOfQuestionsInGame; i++) {
    const lengthProgression = Math.round(Math.random() * 10) + 10
    const missingElementProgression = Math.round(Math.random() * 10) + 3
    const startElementProgression = Math.round(Math.random() * 10) + 1
    let stepProgression = Math.round(Math.random() * 10) + 1
    let elementProgression
    let elementProgressionAuthor
    let allProgressionArrUser = []
    let allProgressionArrAuthor = []
    let emptyElementProgression = '..'
    let strElementProgration = ''

    for (let i = 0; i < lengthProgression; i++) {
      missingElementProgression === i ? (elementProgression = emptyElementProgression) : (elementProgression = startElementProgression + i * stepProgression)
      elementProgressionAuthor = startElementProgression + i * stepProgression
      allProgressionArrUser.push(elementProgression)
      allProgressionArrAuthor.push(elementProgressionAuthor)
    }

    strElementProgration = allProgressionArrUser.join(', ')
    console.log(`Question: ${strElementProgration}`)
    const answer = Number.parseInt(readlineSync.question('Your answer: '))

    if (answer === allProgressionArrAuthor[missingElementProgression]) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${allProgressionArrAuthor[missingElementProgression]}.\nLet's try again, ${nameUser}!`)
      break
    }

    if (i === numberOfQuestionsInGame) {
      console.log(`Congratulations, ${nameUser}!`)
    }
  }
}
