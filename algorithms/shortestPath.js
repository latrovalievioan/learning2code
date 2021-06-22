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
const startR = 0;
const startC = 3;

const initMatrix = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, (i) => (i = false))
  );
};

const emptyMatrix = initMatrix(size);

const findPossiblePaths = (size, startR, startC, emptyMatrix) => {
  emptyMatrix[startR][startC] = 'started';

  for (path in paths) {
    const pathCoordinates = paths[path];
    const pathName = path;
    const pathR = pathCoordinates.r;
    const pathC = pathCoordinates.c;
    const newR = startR + pathR;
    const newC = startC + pathC;

    if (newR < size && newC < size && newR >= 0 && newC >= 0) {
      emptyMatrix[startR + pathR][startC + pathC] = pathName;
    }
  }
  return emptyMatrix;
};

console.table(findPossiblePaths(size, startR, startC, emptyMatrix));
