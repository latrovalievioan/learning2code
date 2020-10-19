//transpose the matrix
const transpose = (matrix) => {
  let transposed = [];
  for (let i = 0; i < matrix.length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
};
//reverse
const reverse = (matrix) => {
  let reversed = [];
  for (let i = 0; i < matrix.length; i++) {
    reversed[i] = [];
    for (let j = 0; j < matrix[i].length / 2; j++) {
      reversed[i][j] = matrix[i][matrix[i].length - j - 1];
      reversed[i][matrix[i].length - j - 1] = matrix[i][j];
    }
  }
  return reversed;
};
//rotate
const rotateRight = (matrix) => {
  let transposed = transpose(matrix);
  let rotated = reverse(transposed);
  return rotated;
};

console.table(
  rotateRight([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
