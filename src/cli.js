import readlineSync from 'readline-sync'

let nameUser = ''
export default function hiUser() {
  console.log('Welcome to the Brain Games!')
  nameUser = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${nameUser}!`)
}
