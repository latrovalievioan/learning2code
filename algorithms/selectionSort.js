const arr = [1, 5, 2, 6, 33, 7, 8, 10, 9, 24, 22, 11];

const swap = (arr, i, minIndex, temp = arr[i]) => {
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
};

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  swap(arr, i, minIndex);
}
console.log(arr);
