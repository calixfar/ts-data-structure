const DIRECTIONS = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]

export function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
  let cellsToAttack = 0

  DIRECTIONS.forEach((direction) => {
    cellsToAttack += goThroughArrayPath({
      direction,
      coord: [r_q - 1, c_q - 1],
      length: n,
      cb: (coord: number[]) => !!obstacles.find((obstacle) => obstacle[0] - 1 === coord[0] && obstacle[1] - 1 === coord[1])
    })
  })

  return cellsToAttack
}

interface GoThroughArrayPathParams {
  direction: number[]
  coord: number[]
  length: number
  cb: (currentCoord: number[]) => boolean
}
export function goThroughArrayPath ({
  direction,
  coord,
  length,
  cb
}: GoThroughArrayPathParams): number {
  let cont = 0

  function recursive (currentCoord: GoThroughArrayPathParams['coord']): number {
    if ((currentCoord[0] < 0 || currentCoord[1] < 0) || (currentCoord[0] >= length || currentCoord[1] >= length) || cb(currentCoord)) {
      return cont
    }

    cont++
    
    return recursive([currentCoord[0] + direction[0], currentCoord[1] + direction[1]])
  }

  return recursive([coord[0] + direction[0], coord[1] + direction[1]])
}

export function isCoordsInArray(coords: number[], array: number[][]) {
  function recursive (index: number): boolean {
    if (index >= array.length) {
      return false
    }

    if (array[index][0] === coords[0] && array[index][1] === coords[1]) {
      return true
    }

    return recursive(index + 1)
  }

  return recursive(0)
}
