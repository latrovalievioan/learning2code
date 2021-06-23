/*
 * Complete the 'printShortestPath' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER i_start
 *  3. INTEGER j_start
 *  4. INTEGER i_end
 *  5. INTEGER j_end
 */

const paths = {
  ul: {
    r: -2,
    c: -1,
  },
  ur: {
    r: -2,
    c: 1,
  },
  r: {
    r: 0,
    c: 2,
  },
  lr: {
    r: 2,
    c: 1,
  },
  ll: {
    r: 2,
    c: -1,
  },
  l: {
    r: 0,
    c: -2,
  },
};

const size = 7;
const start = { r: 0, c: 3, name: 'start' };
const end = { r: 4, c: 3 };

const initMatrix = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, (i) => (i = false))
  );
};

const emptyMatrix = initMatrix(size);

const bfs = () => {
  const q = [];
  const visited = {};

  q.push(start);

  while (q.length > 0) {
    const { r, c } = q.shift();
    const currentKey = `${r}x${c}`;
    const current = emptyMatrix[r][c];
    const neighbors = [
      { r: r + paths.ul.r, c: c + paths.ul.c, name: 'UL' },
      { r: r + paths.ur.r, c: c + paths.ur.c, name: 'UR' },
      { r: r + paths.r.r, c: c + paths.r.c, name: 'R' },
      { r: r + paths.lr.r, c: c + paths.lr.c, name: 'LR' },
      { r: r + paths.ll.r, c: c + paths.ll.c, name: 'LL' },
      { r: r + paths.l.r, c: c + paths.l.c, name: 'L' },
    ];

    neighbors.forEach((n) => {
      const nRow = n.r;
      const nCol = n.c;

      if (nRow === end.r && nCol === end.c) {
        console.log('yay');
      }
      if (
        nRow < 0 ||
        nRow > emptyMatrix.length - 1 ||
        nCol < 0 ||
        nCol > emptyMatrix.length - 1
      )
        return;

      const key = `${nRow}x${nCol}`;

      if (key in visited) return;

      visited[key] = {
        key: currentKey,
        cell: current,
      };

      emptyMatrix[nRow][nCol] = n.name;

      q.push(n);
    });
  }
};

bfs();

console.table(emptyMatrix);

// const findPossiblePaths = (size, startR, startC, emptyMatrix) => {
//   emptyMatrix[startR][startC] = 'started';

//   for (path in paths) {
//     const pathCoordinates = paths[path];
//     const pathName = path;
//     const pathR = pathCoordinates.r;
//     const pathC = pathCoordinates.c;
//     const newR = startR + pathR;
//     const newC = startC + pathC;

//     if (newR < size && newC < size && newR >= 0 && newC >= 0) {
//       emptyMatrix[startR + pathR][startC + pathC] = pathName;
//     }
//   }
//   return emptyMatrix;
// };

// console.table(findPossiblePaths(size, startR, startC, emptyMatrix));
