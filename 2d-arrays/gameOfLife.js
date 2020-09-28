// on  character: █
// off character: ░

function gameOfLife(board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      let neighboursCount = 0;
      let neighbours = [];
      neighbours.push(board[i][j - 1], board[i][j + 1]);
      if (board[i - 1] !== undefined) {
        neighbours.push(
          board[i - 1][j - 1],
          board[i - 1][j],
          board[i - 1][j + 1]
        );
      }
      if (board[i + 1] !== undefined) {
        neighbours.push(
          board[i + 1][j - 1],
          board[i + 1][j],
          board[i + 1][j + 1]
        );
      }
      for (let x = 0; x < neighbours.length; x++) {
        if (neighbours[x] === 1) {
          neighboursCount += 1;
        }
      }
      if (board[i][j] === 1) {
        if (neighboursCount < 2 || neighboursCount > 3) {
          result[i][j] = 0;
        } else {
          result[i][j] = board[i][j];
        }
      } else if (board[i][j] === 0 && neighboursCount === 3) {
        result[i][j] = 1;
      } else {
        result[i][j] = board[i][j];
      }
    }
  }
  return result
    .join(" ")
    .replace(/\s/gi, "\n")
    .replace(/0/gi, "░")
    .replace(/1/gi, "█")
    .replace(/,/gi, "");
}

console.table(
  gameOfLife([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
