export function selectionSort(arr: number[]) {
  arr = [...arr]
  
  const newArray: number[] = []
  let index = 0
  let totalElements = arr.length

  while (index < totalElements) {
    const smallestIndexElement = getSmallestElement(arr)
    newArray.push(arr[smallestIndexElement])
    arr.splice(smallestIndexElement, 1)
    index++
  }

  return newArray
}

function getSmallestElement(arr: number[]) {
  let smallestIndexElement = 0

  arr.slice(1).forEach((item, index) => {
    if (item < arr[smallestIndexElement]) {
      smallestIndexElement = index + 1
    }
  })

  return smallestIndexElement
}

export function selectionSortV2(arr: number[]) {
  let smallestIndex = 0

  for (let i = 0; i < arr.length; i++) {
    const foundSmallestIndex = recursiveGetSmallestElement(i === arr.length - 1 ? i : i + 1)
    const temp = arr[i]
    arr[i] = arr[foundSmallestIndex]
    arr[foundSmallestIndex] = temp
  }

  function recursiveGetSmallestElement(index = 0): number {
    if (index === arr.length) {
      return smallestIndex
    }

    if (arr[smallestIndex] > arr[index]) {
      smallestIndex = index
    }
  
    return recursiveGetSmallestElement(index + 1)
  }

  return arr
}
