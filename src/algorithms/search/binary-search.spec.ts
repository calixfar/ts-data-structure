import { recursiveBinarySearch } from './binary-search'

describe('BinarySearch', () => {
  test('should returns -1 if the value is not in array', () => {
    const arr = [1,2,3,4,5,6,7]

    expect(recursiveBinarySearch(arr, 8)).toBe(-1)
  })
  test('should returns the index about value position if that one is in array', () => {
    const arr = [1,2,3,4,5,6,7]

    expect(recursiveBinarySearch(arr, 1)).toBe(0)
    expect(recursiveBinarySearch(arr, 4)).toBe(3)
    expect(recursiveBinarySearch(arr, 7)).toBe(6)
  })
})