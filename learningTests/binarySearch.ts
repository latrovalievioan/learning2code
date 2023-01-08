const arr = [1,2,3,4];

type SearchResult = 
  | number
  | 'Not Found'

export const bSearch = (arr: number[], n: number, s: number, e: number): SearchResult => {
  if(s > e) return 'Not Found'

  const middle = Math.floor((s + e) / 2);

  if(arr[middle] === n) return middle
  
  return arr[middle] > n
    ? bSearch(arr, n, s, middle - 1)
    : bSearch(arr, n, middle + 1, e)
}


console.log(bSearch(arr, 4, 0, arr.length - 1))
