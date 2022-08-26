export function recursiveBinarySearch(array: number[], valueToFind: number) {
  let start = 0, end = array.length

  function recursive() {
    if (start >= end) {
        return -1
    }
    
    let middle = Math.floor((start + end ) / 2)
    
    if (array[middle] === valueToFind) {
        return middle
    }
  
    if (array[middle] < valueToFind) {
        start = middle + 1
    } else {
        end = middle
    }
  
    return recursive()
  }

  return recursive()
}