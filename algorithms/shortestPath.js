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
  const start = { r: i_start, c: j_start, name: 'start' };
  const end = { r: i_end, c: j_end };

  const initMatrix = (size) => {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, (i) => (i = false))
    );
  };

  const emptyMatrix = initMatrix(size);

  const shortestPath = () => {
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

    const path = [];

    let currentKey = `${end.r}x${end.c}`;

    let current = emptyMatrix[end.r][end.c];

    while (current) {
      path.push(current);

      const { key, cell } = visited[currentKey];

      current = cell;
      currentKey = key;
    }

    if (!path.length) {
      console.log('Impossible');
      return;
    }

    console.log(path.length);
    console.log(path.reverse().join(' '));
  };

  shortestPath();
}

printShortestPath(7, 6, 6, 0, 1);
