import { queensAttack, isCoordsInArray, goThroughArrayPath } from './queens-attack'

describe('queensAttack', () => {
  test('should return a number greater than or equal 0', () => {
    expect(queensAttack(0, 0, 0, 0, [[0,0]])).toBeGreaterThanOrEqual(0)
  })

  test('should return the rigth value of possible cells', () => {
    expect(queensAttack(4, 0, 4, 4, [])).toBe(9)
    expect(queensAttack(4, 0, 4, 1, [])).toBe(9)
    expect(queensAttack(4, 0, 1, 1, [])).toBe(9)
    expect(queensAttack(4, 0, 1, 4, [])).toBe(9)
    expect(queensAttack(8, 0, 4, 4, [])).toBe(27)
  })

  test('should return the quantity of possible cells less the obstacles quantity', () => {
    expect(queensAttack(4, 1, 4, 4, [[1,1]])).toBe(8)
    expect(queensAttack(5, 3, 2, 3, [[1,5], [2,2], [4,3]])).toBe(10)
    expect(queensAttack(8, 1, 5, 4, [[6,5]])).toBe(24)

  })
})

describe('isCoordsInArray', () => {
  test('should return false is the coord is not inside the array', () => {
    expect(isCoordsInArray([2,2], [[0,0], [2,0], [0,2]])).toBe(false)
  })

  test('should return true if the coord is inside the array', () => {
    expect(isCoordsInArray([2,2], [[0,0], [2,0], [0,2], [2,2]])).toBe(true)
    expect(isCoordsInArray([3,4], [[0,0], [3,4], [0,2], [2,2]])).toBe(true)
  })
})

describe('goThroughArrayPath', () => {
  test('should call the callback the same times until the array length', () => {
    const cb = jest.fn().mockReturnValue(false)
    const direction = [0, -1]
    const coord = [2, 2]

    goThroughArrayPath({ direction, coord, length: 4, cb })

    expect(cb.mock.calls).toHaveLength(2)
  })

  test('should return the iterions number until any coord position gets less than 0', () => {
    const cb = jest.fn().mockReturnValue(false)
    const direction = [0, -1]
    const coord = [3, 3]

    let result = goThroughArrayPath({ direction, coord, length: 4, cb })
    expect(result).toBe(3)
  })

  test('should return the iterions number until cb returns false', () => {
    const cb = jest.fn().mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValue(true)
    const direction = [0, -1]
    const coord = [3, 3]

    expect(goThroughArrayPath({ direction, coord, length: 4, cb })).toBe(2)
  })

  test('should call the callback function keeping the order as direction array says', () => {
    const cb = jest.fn().mockReturnValue(false)
    const direction = [1, 1]
    const coord = [0, 0]
    const orderByDirections = [[1,1], [2,2], [3,3]]

    goThroughArrayPath({ direction, coord, length: 4, cb })
    
    expect(orderByDirections).toEqual(cb.mock.calls.map((value) => value[0]))
  })
})