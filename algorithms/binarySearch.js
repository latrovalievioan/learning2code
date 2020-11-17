const binarySearch = (arr, num, left = 0, right = arr.length - 1) => {
  let midPoint = Math.floor((right - left) / 2 + left);
  switch (true) {
    case arr[midPoint] === num:
      return midPoint;
    case right - left === 0:
      return false;
    case arr[midPoint] < num:
      return binarySearch(arr, num, midPoint + 1, right);
    case arr[midPoint] > num:
      return binarySearch(arr, num, left, midPoint);
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
