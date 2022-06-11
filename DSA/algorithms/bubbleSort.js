const swap = (arr, x, y, temp = arr[x]) => {
  arr[x] = arr[y];
  arr[y] = temp;
};
const arr = [1, 5, 2, 6, 3, 4, 7, 9, 8, 11];

let hasSwapped = true;
const bubbleSort = (arr) => {
  while (hasSwapped) {
    hasSwapped = false;
    arr.forEach((n, i) => {
      if (n > arr[i + 1]) {
        swap(arr, i, i + 1);
        hasSwapped = true;
      }
    });
  }
  return arr;
};

console.log(bubbleSort(arr));
