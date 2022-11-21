import Prompt from 'prompt-sync'


console.log("Welcome to a Mini Quiz!!!")

const answers = {
  first: "Babar Azam",
  second: "Rohit Sharma",
  third: "India",
}


const p = Prompt()
const [answer1, answer2, answer3] = [
  p('Who is the captain of Pakistan in Mens T20 World Cup 2022?'),
  p('Who is the captain of India in Mens T20 World Cup 2022?'),
  p('Who won the game between Pakistan and India in Mens T20 World Cup 2022?')
]

let score = 0;
const answersRcvd = [answer1, answer2, answer3]
// console.log(Object.keys(answers))
for (let i = 0; i < Object.values(answers).length; i++) {

  if (answersRcvd[i] === Object.values(answers)[i]) {
    ++score
  }
}


console.log("Quiz Ended\nYou Scored:", score, 'points')
