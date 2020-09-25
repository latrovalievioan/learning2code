const transposeMatrix = (matrix) => {
  let transposed = [];
  for (let i = 0; i < matrix.length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
};

console.table(
  transposeMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
