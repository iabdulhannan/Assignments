import Prompt from 'prompt-sync'

console.log("------------------A Basic Calculator------------------")
const p = Prompt()


const askOperation = () => {
  return p(`What operation do you want to perform?
  Press:
1 for Division
2 for Multiplication
3 for Addition
4 for Subtraction`)

}

const askFirstOperand = () => {
  return p(`Enter the first Operand`)
}
const askSecondOperand = () => {
  return p(`Enter the second Operand`)
}
const performOperations = (firstOperand, secondOperand, operator) => {

  switch (operator) {

    case 1:
      return firstOperand / secondOperand
    case 2:
      return firstOperand * secondOperand
    case 3:
      return firstOperand + secondOperand
    case 4:
      return firstOperand - secondOperand

  }
}


const validOperationAnswers = [1, 2, 3, 4]

let selectedOperation = 0

while (true) {
  selectedOperation = parseInt(askOperation())

  if (validOperationAnswers.includes(selectedOperation)) {
    let first = parseInt(askFirstOperand())
    while (isNaN(first)) {
      console.log('Please enter a number')
      first = parseInt(askFirstOperand())
    }

    let second = parseInt(askSecondOperand())
    while (isNaN(second)) {
      console.log('Please enter a number')
      second = parseInt(askSecondOperand())
    }

    console.log(`Answer: ${performOperations(first, second, selectedOperation)}`)

    break
  } else
    console.log('Please provide an answer between 1 and 4')
}

