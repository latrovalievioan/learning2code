const { bSearch } = require('./binarySearch');

describe('Binary Search Alg', () => {
  const arr = [0,1,2,3,4]

  test('BSearch is defined', () => {
    expect(bSearch).toBeDefined()
  })

  test('Finding the first element of a sorted list', () => {
      expect(bSearch(arr, 0)).toBe(0)
  })

  test('Finding the last element of a sorted list', () => {
    expect(bSearch(arr, 4)).toBe(4)
  })

  test('Not finding a value', () => {
    expect(bSearch(arr, 12)).toBe(-1)
  })

  test('Empty list should return Not Found', () => {
    expect(bSearch([], 1)).toBe(-1)
  })
  
  test('Finds a value in a list with a single value', () => {
    const single = [1]
    expect(bSearch(single, 1)).toBe(0)
  })

  test('Finds values in list of two values', () => {
    const two = [0,25]
    expect(bSearch(two, 0)).toBe(0)
    expect(bSearch(two, 25)).toBe(1)
  })

  test('Works with repeating numbers', () => {
    const arr = [1,2,2,2,2,3]
    expect(bSearch(arr, 2)).toBe(2)
  })

  test('Works with only repeating numbers', () => {
    const arr = [2,2,2,2,2]
    expect(bSearch(arr,2)).toBe(2)
  })

  test('Element on returned index position is the same as element searched', () => {
    expect(arr[bSearch(arr, 4)]).toBe(4)
  })
  
  test('Works with ranges', () => {
    expect(bSearch(arr, 4, 2, 4)).toBe(4)
    expect(bSearch(arr, 4, 1, 3)).toBe(-1)
  })
});
