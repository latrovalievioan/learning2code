const trace = (matrix) => {
  let trace = [];
  for (let i = 0; i < matrix.length; i++) {
    trace[i] = matrix[i][i];
  }
  return trace;
};

console.log(
  trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
  ])
);
