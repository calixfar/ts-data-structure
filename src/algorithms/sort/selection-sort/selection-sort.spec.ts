import { selectionSort, selectionSortV2 } from './selection-sort'

function executeTestForSelectionSort (fn: (arr: number[]) => number[]) {
  test('should return array with the same item if the array prop has one item', () => {
    const arr = [1]

    expect(fn(arr)).toEqual(arr)
  })

  test('should return ordered array', () => { 
    const arr = [5,4,3,2,1]

    expect(fn(arr)).toEqual(arr.reverse())
   })
}

describe('Selection Sort Algorithm', () => {
  executeTestForSelectionSort(selectionSort)
}) 

describe('Selection Sort Algorithm V2', () => {
  executeTestForSelectionSort(selectionSortV2)
}) 