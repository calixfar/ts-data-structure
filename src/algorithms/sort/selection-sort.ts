export function selectionSort(arr: number[]) {
  const newArray: number[] = []
  let index = 0
  let totalElements = arr.length

  while (index < totalElements) {
    const smallestIndexElement = getSmallestElement(arr)
    newArray.push(arr[smallestIndexElement])
    arr.splice(smallestIndexElement, 1)
    index++
  }

  console.log(newArray)
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