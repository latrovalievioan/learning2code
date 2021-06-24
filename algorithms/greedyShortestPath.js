function printShortestPath(n, i_start, j_start, i_end, j_end) {
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

  const size = n;
  const start = { r: i_start, c: j_start };
  const end = { r: i_end, c: j_end };

  const initMatrix = (size) => {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, (i) => (i = false))
    );
  };

  const emptyMatrix = initMatrix(size);

  emptyMatrix[start.r][start.c] = 'start';
  emptyMatrix[end.r][end.c] = 'end';

  const findPath = () => {
    const path = [];

    let currentPos = { r: start.r, c: start.c, name: 'start' };

    while (currentPos.r !== end.r || currentPos.c !== end.c) {
      const nextPos = {};
      // LR
      if (end.r > currentPos.r && end.c >= currentPos.c) {
        nextPos.r = currentPos.r + paths.lr.r;
        nextPos.c = currentPos.c + paths.lr.c;
        nextPos.move = 'LR';
      }
      // LL
      else if (end.r > currentPos.r && end.c < currentPos.c) {
        nextPos.r = currentPos.r + paths.ll.r;
        nextPos.c = currentPos.c + paths.ll.c;
        nextPos.move = 'LL';
      }
      //R --- checking if is possible to get to the position --- if current pos is even end pos must be even for reaching with R.
      else if (
        end.r === currentPos.r &&
        end.c > currentPos.c &&
        end.c % 2 === currentPos.c % 2
      ) {
        nextPos.r = currentPos.r + paths.r.r;
        nextPos.c = currentPos.c + paths.r.c;
        nextPos.move = 'R';
      }
      //L --- same implementation like R
      else if (
        end.r === currentPos.r &&
        end.c < currentPos.c &&
        end.c % 2 === currentPos.c % 2
      ) {
        nextPos.r = currentPos.r + paths.l.r;
        nextPos.c = currentPos.c + paths.l.c;
        nextPos.move = 'L';
      }
      // UL
      else if (end.r < currentPos.r && end.c <= currentPos.c) {
        nextPos.r = currentPos.r + paths.ul.r;
        nextPos.c = currentPos.c + paths.ul.c;
        nextPos.move = 'UL';
      }
      // UR
      else if (end.r < currentPos.r && end.c > currentPos.c) {
        nextPos.r = currentPos.r + paths.ur.r;
        nextPos.c = currentPos.c + paths.ur.c;
        nextPos.move = 'UR';
      } else {
        return 'Impossible';
      }

      emptyMatrix[nextPos.r][nextPos.c] = nextPos.move;
      path.push(nextPos.move);
      currentPos = nextPos;
    }
    console.log(path.length);
    console.log(path.join(' '));
  };

  findPath();
}

printShortestPath(100, 2, 24, 92, 45);
