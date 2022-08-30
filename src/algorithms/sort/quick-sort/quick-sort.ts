export function quickSort(arr: number[]) {
  if (arr.length < 2) {
    return arr
  }

  const smallers: number[] = [], greaters: number[] = [], pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greaters.push(arr[i])
    }

    if (arr[i] <= pivot) {
      smallers.push(arr[i])
    }
  }

  return [...quickSort(smallers), pivot, ...quickSort(greaters)]
}


export function quickSortV2(arr: number[]) {
  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[arr.length -1]
  let smallestIndex = 0, smallestLength = 0

  for (let index = 0; index < arr.length - 1; index++) {
    const item = arr[index]
    
    if (item <= pivot) {
      if (index - smallestLength > 0) {
        const temp = arr[smallestLength]
        arr[smallestLength] = item
        arr[index] = temp
      }

      smallestLength++
    }
  }

  return [...quickSortV2(arr.slice(smallestIndex, smallestLength)), pivot, ...quickSortV2(arr.slice(smallestLength, arr.length - 1))]
}