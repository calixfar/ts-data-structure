export function recursiveSumArray(arr: number[]): number[] | number {
  if (arr.length === 0) {
    return 0
  }

  if (arr.length === 1) {
    return arr[0]
  }
  
  return arr[0] + (recursiveSumArray(arr.slice(1)) as number)
}