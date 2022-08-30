import { quickSort, quickSortV2 } from './quick-sort'

function executeCommonTest(sortFn: (arr: number[]) => number[])  {
  test('should return empty array if the array parameter does not have items', () => {
    expect(sortFn([]).length).toBe(0)
  })

  test('should return the same array if the array parameter has one item', () => {
    const arr = [1]
    
    expect(sortFn(arr)).toEqual(arr)
  })

  test('should return a sorted array by reversed array', () => {
    const arr = [1,2,3,4,5]

    expect(sortFn([...arr].reverse())).toEqual(arr)
  })

  test('should return a sorted array by unorganized array', () => {
    const arr = [2,8,7,1,3,5,6,4]

    expect(sortFn([...arr])).toEqual([1,2,3,4,5,6,7,8])
  })
}

describe('Quicksort', () => {
  executeCommonTest(quickSort)
})

describe('Quicksort V2', () => {
  executeCommonTest(quickSortV2)
})