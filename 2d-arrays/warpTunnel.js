function warpTunnel(mtx, n) {
  let result = [];
  const originalRowLength = mtx.length;
  const originalColLength = mtx[0].length;
  mtx = mtx.flat(Infinity);
  mtx = mtx.concat(mtx.splice(0, mtx.length - n));
  for (let i = 0, j = 0; i < originalColLength; i++, j += originalColLength) {
    result[i] = mtx.slice(j, j + originalColLength);
  }
  return result;
}

console.log(
  warpTunnel(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4
  )
);
