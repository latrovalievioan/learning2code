//napravi malak pravougalnik
const quadrant = (matrix, r, c, sR, sC) => {
  let sum = 0;
  for (let i = sR; i < sR + r; i++) {
    for (let j = sC; j < sC + c; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sum = (matrix, r, c) => {
  sums = [];
  for (let sR = 0; sR <= matrix.length - r; sR++) {
    for (let sC = 0; sC <= matrix[0].length - c; sC++) {
      sums.push(quadrant(matrix, r, c, sR, sC));
    }
  }
  return sums;
};

console.log(
  sum(
    [
      [1, 2, 3, 4, 0],
      [5, 6, 7, 8, 0],
      [9, 10, 11, 12, 0],
      [13, 14, 15, 16, 0],
    ],
    2,
    2
  )
);
