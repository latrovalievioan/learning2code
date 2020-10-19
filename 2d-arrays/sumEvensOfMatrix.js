const sumOfEvens = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
};

console.log(
  sumOfEvens([
    [1, 5, 1, 3],
    [4, 1, 2, 0],
    [6, 9, 7, 4],
    [5, 1, 2, 6],
  ])
);
