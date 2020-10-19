const columns = (matrix) => {
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[j][i]);
    }
  }
};

columns([
  [1, 5, 1, 3],
  [4, 1, 2, 0],
  [6, 9, 7, 4],
  [5, 1, 2, 6],
]);
