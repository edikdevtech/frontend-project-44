import hiUser from '../cli.js'
import makeRound from '../index.js'
import getRandomRange from '../getRandomRange.js'

const textQuestionProgression = 'What number is missing in the progression?'

hiUser()

function progressionCode(start, step, empty) {
  let arrayProgression = []

  for (let i = 0; i < 10; i++) {
    arrayProgression.push(start + i * step)
  }
  const emptyNumber = arrayProgression[empty]
  arrayProgression[empty] = '..'

  return {
    arrayProgressionResult: arrayProgression.join(' '),
    emptyNumberProgression: String(emptyNumber),
  }
}

function generationRoundGameProgression() {
  let startNum = getRandomRange()
  let stepNum = getRandomRange(2, 10)
  let emptyNum = getRandomRange(0, 9)

  const resultRound = progressionCode(startNum, stepNum, emptyNum)
  const arrayProgressionResult = resultRound.arrayProgressionResult
  const emptyNumberProgression = resultRound.emptyNumberProgression

  return {
    question: arrayProgressionResult,
    correсtAnswer: emptyNumberProgression,
  }
}

export default function progressionGame() {
  makeRound(generationRoundGameProgression, textQuestionProgression)
}
