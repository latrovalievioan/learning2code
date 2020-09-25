const rotateLeft = (matrix) => {
  //purviq red = na poslednata kolona
  //vtori red = predposledna kolona

  //obhodi koloni otzad napred
  //napravi gi redove v nova matrica
  let rotated = [];
  for (let j = matrix[0].length - 1, x = 0; j >= 0; j--, x++) {
    rotated[x] = [];
    for (let i = 0; i < matrix.length; i++) {
      rotated[x][i] = matrix[i][j];
    }
  }

  return rotated;
};

console.table(
  rotateLeft([
    [1, 2, 3, 4, 0],
    [5, 6, 7, 8, 0],
    [9, 10, 11, 12, 0],
    [13, 14, 15, 16, 0],
  ])
);
