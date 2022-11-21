const array = [11, 14, 17, 19]
const start = 11
const end = 19
let possibleIndex = 0

for (let i = 1; i <= end - start; i++) {
  let prevNumber = array[i - 1]
  if (array[i] !== prevNumber && prevNumber && array[i]) {
    while (prevNumber !== array[i] - 1) {
      possibleIndex++
      prevNumber++
      console.log(`Missing Number ${prevNumber} at index: ${possibleIndex}`)
    }
    console.log(`${array[i]} should be pushed to index ${++possibleIndex}`)
  } else {
    possibleIndex++
  }
}
