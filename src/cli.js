import readlineSync from 'readline-sync'

export let nameUser = ''
export default () => {
  console.log('Welcome to the Brain Games!')
  nameUser = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${nameUser}!`)
}
