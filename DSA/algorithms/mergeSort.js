const merge = (left, right) => {
  let output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftEl = left[leftIndex];
    const rightEl = right[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([2, 133, 23, 4, 3, 75, 32, 55]));
