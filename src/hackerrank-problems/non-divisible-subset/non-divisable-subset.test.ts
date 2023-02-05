import { nonDivisibleSubset } from './non-divisable-subset'

describe('nonDivisibleSubset', () => {
  test('should return a non-negative number', () => {
    expect(nonDivisibleSubset(1, [])).toBeGreaterThanOrEqual(0)
  })
})