import { recursiveBinarySearch } from './binary-search'

describe('BinarySearch', () => {
  test('should return -1 if the value is not in the array', () => {
    const arr = [1,2,3,4,5,6,7]

    expect(recursiveBinarySearch(arr, 8)).toBe(-1)
  })
  test('should return the index from position of the value if that one is in the array', () => {
    const arr = [1,2,3,4,5,6,7]

    expect(recursiveBinarySearch(arr, 1)).toBe(0)
    expect(recursiveBinarySearch(arr, 4)).toBe(3)
    expect(recursiveBinarySearch(arr, 7)).toBe(6)
  })
})