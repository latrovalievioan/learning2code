const multiply = (m1, m2) => {
  if (m1[0].length === m2.length) {
    let result = [];
    for (let i = 0; i < m1.length; i++) {
      result[i] = [];

      for (let j = 0; j < m2[0].length; j++) {
        result[i][j] = 0;
        for (let x = 0; x < m2.length; x++) {
          result[i][j] += m1[i][x] * m2[x][j];
        }
      }
    }
    return result;
  } else {
    return "invalid matrixes";
  }
};

console.table(
  multiply(
    [
      [3, 4],
      [7, 2],
      [5, 9],
    ],
    [
      [3, 1, 5],
      [6, 9, 7],
    ]
  )
);
