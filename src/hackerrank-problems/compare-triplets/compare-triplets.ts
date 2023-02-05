// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

export function compareTriplets(a: number[], b: number[]): number[] {
  const result = [0, 0]

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      result[0] += 1
    } else if (a[index] < b[index]) {
      result[1] += 1
    }
  }

  return result
}

export function dinamicCompareTriplets(...values: number[][]): number[] {
  const result = values.map(() => 0)
  
  for (let index = 0; index < values[0].length; index++) {
    let greaterIndexValue = 0
    let isEqual = true

    for (let indexChild = 1; indexChild < values.length; indexChild++) {
      if (values[indexChild][index] !== values[greaterIndexValue][index]) {
        isEqual = false
      }

      if (values[indexChild][index] > values[greaterIndexValue][index]) {
        greaterIndexValue = indexChild
      }
    }

    if (!isEqual) {
      result[greaterIndexValue] += 1
    }
  }

  return result
}
