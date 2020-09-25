const rotateRight = (matrix) => {
  //purvi red na novata = purva kolona ot starata ot dolu nagore
  //obhodi po koloni otdolu nagore
  //napravi gi redove
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = [];
    for (let j = matrix.length - 1, x = 0; j >= 0; j--, x++) {
      result[i][x] = matrix[j][i];
    }
  }
  return result;
};

console.table(
  rotateRight([
    [1, 2, 3, 4, 0],
    [5, 6, 7, 8, 0],
    [9, 10, 11, 12, 0],
    [13, 14, 15, 16, 0],
  ])
);
