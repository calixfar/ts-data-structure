export function nonDivisibleSubset (divisibleNumber: number, arr: number[]): number {
  const nonDivisableArr: number[] = []

  arr.forEach((item, itemIndex) => {
    arr.forEach((subItem, subItemIndex) => {
      if (itemIndex === subItemIndex) {
        return
      }

      if ((item + subItem) % divisibleNumber !== 0) {
        [item, subItem].forEach((valueToValidate) => {
          if (isNonDivisableInArray(nonDivisableArr, valueToValidate, divisibleNumber)) {
            nonDivisableArr.push(valueToValidate)
          }
        })
      } 
    })
  })

  console.log('nonDivisableArr', nonDivisableArr)

  return nonDivisableArr.length
}

function isNonDivisableInArray (array: number[], nonDivisableNumber: number, numberToValidate: number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === nonDivisableNumber || (nonDivisableNumber + array[index]) % numberToValidate === 0) {
      return false
    }
    
  }

  return true
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]))
// console.log(nonDivisibleSubset(15, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]))