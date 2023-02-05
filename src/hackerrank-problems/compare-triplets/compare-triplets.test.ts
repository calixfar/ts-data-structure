import { compareTriplets, dinamicCompareTriplets } from './compare-triplets'

function isIndexValueGreater(indexGreater: number, array: number[]) {
  return !array.some((value, index) => {
    if (index !== indexGreater && value > array[indexGreater]) {
      return true
    }

    return false
  })
}

function executeCommonTests(fn: (...args: number[][]) => number[]) {
  test('should return an array with to elements inside it', () => {
    const result = fn([], [])
    expect(result.length).toBe(2)
  })  

  test('should return the right winner by the arrays parameters values', () => {
    const result = fn([2, 2, 2], [1, 1, 1])
    expect(result[0]).toBeGreaterThan(result[1])

    const result2 = fn([1, 1, 1], [2, 2, 2])
    expect(result2[1]).toBeGreaterThan(result2[0])
  })

  test('should return an array with all its position value equal if every position of the array parameters are tie', () => {
    const result = fn([1, 1, 1], [1, 1, 1])
    
    expect(result[0]).toBe(0)
    expect(result[1]).toBe(0)

    const result2 = fn([1, 2, 1], [2, 1, 1])
    expect(result2[0]).toBe(result2[1])
  })
}

describe('compareTriplets', () => {
  executeCommonTests(compareTriplets)
})

describe('dinamicCompareTriplets', () => {
  executeCommonTests(dinamicCompareTriplets)

  test('should return an array with the same quantity of positions by quantity of parameters', () => {
    const parameters = [[1], [1], [1], [1]]

    expect(dinamicCompareTriplets(...parameters).length).toBe(parameters.length)
  })

  test('should return an array with a greater value than the rest of values if its respective parameter has the greatest values', () => {
    const parameters = [[1, 1, 1], [4, 4, 4], [3, 3, 3], [2, 2, 2]]
    const result = dinamicCompareTriplets(...parameters)
    
    expect(isIndexValueGreater(1, result)).toBe(true)
  })
})