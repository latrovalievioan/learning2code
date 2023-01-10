const arr = [1,2,3,4];

export const bSearch = (
  arr: number[], 
  n: number, 
  s: number = 0, 
  e: number = arr.length - 1
): number => {
  if(s > e) return -1

  const middle = Math.floor(s + ((e - s) / 2));

  if(arr[middle] === n) return middle
  
  return arr[middle] > n
    ? bSearch(arr, n, s, middle - 1)
    : bSearch(arr, n, middle + 1, e)
}


console.log(bSearch(arr, 4))
