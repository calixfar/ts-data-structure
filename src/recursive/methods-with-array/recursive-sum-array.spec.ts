import { recursiveSumArray } from './recursive-sum-array'

describe('Recusirve Sum Array', () => {
  test('should returns 0 if the array does not have items', () => {
    expect(recursiveSumArray([])).toBe(0)
  })

  test('should returns the same fist item value if the array has one item', () => {
    const arr = [1]
    
    expect(recursiveSumArray(arr)).toBe(arr[0])
  })

  test('should returns the sum about the array', () => {
    const arr = [1,2,3,4,5]

    expect(recursiveSumArray(arr)).toBe(15)
  })
})