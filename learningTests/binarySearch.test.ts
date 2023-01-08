const { describe, expect, test } = require('@jest/globals');
const { bSearch } = require('./binarySearch');

describe('Binary Search Alg', () => {
  const arr = [0,1,2,3,4]
  const empty = []
  const single = [1]
  const two = [0,25]

  test('BSearch is defined', () => {
    expect(bSearch).toBeDefined()
  })

  test('Finding the first element of a sorted list', () => {
      expect(bSearch(arr, 0, 0, arr.length - 1)).toBe(0)
  })

  test('Finding the last element of a sorted list', () => {
    expect(bSearch(arr, 4, 0, arr.length - 1)).toBe(4)
  })

  test('Not finding a value', () => {
    expect(bSearch(arr, 12, 0, arr.length - 1)).toBe('Not Found')
  })

  test('Empty list should return Not Found', () => {
    expect(bSearch(empty, 1, 0, empty.length - 1)).toBe('Not Found')
  })
  
  test('Finds a value in a list with a single value', () => {
    expect(bSearch(single, 1, 0, single.length - 1)).toBe(0)
  })

  test('Finds values in list of two values', () => {
    expect(bSearch(two, 0, 0, two.length - 1)).toBe(0)
    expect(bSearch(two, 25, 0, two.length - 1)).toBe(1)
  })

});
