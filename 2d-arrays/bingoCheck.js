function bingoCheck(board) {
  let regexRows = new RegExp("x".repeat(board[0].length));
  let regexCols = new RegExp("x".repeat(board.length));
  let countDiag = 0;
  for (let i = 0, j = 0; i < board.length; i++, j++) {
    if (regexRows.test(board[i].join(""))) {
      return true;
    }
    if (board[i][j] === "x" || board[i][board[i].length - j - 1] === "x") {
      countDiag++;
    }
  }
  if (countDiag === board[0].length * 2 || countDiag === board[0].length) {
    return true;
  }
  for (let x = 0; x < board[0].length; x++) {
    let stringCols = "";
    for (let y = 0; y < board.length; y++) {
      stringCols += board[y][x];
    }
    if (regexCols.test(stringCols)) {
      return true;
    }
  }
  return false;
}

console.log(
  bingoCheck([
    [45, "x", 31, 74, 24],
    [64, "x", 47, 36, 90],
    [37, "x", 25, 83, 54],
    [67, "x", 98, 39, 44],
    [23, "x", 24, 30, 52],
  ])
);
