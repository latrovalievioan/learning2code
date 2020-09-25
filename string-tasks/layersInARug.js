function countLayers(rug) {
  let count = 0;
  if (rug[0] !== undefined) {
    count++;
  }
  if (rug[1] !== undefined) {
    for (let x = 0; x < rug.length / 2 - 1; ++x) {
      let currentRow = rug[x];
      let nextRow = rug[x + 1];
      if (
        currentRow[Math.floor(currentRow.length / 2)] !==
        nextRow[Math.floor(nextRow.length / 2)]
      ) {
        count++;
      }
    }
  }

  return count;
}

console.table(countLayers(["AAA"]));
