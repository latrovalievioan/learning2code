const decToHex = (num) => {
  let result = [];
  for (let i = num, j = 0; i >= 1; i = Math.floor(i / 16), j++) {
    result[j] = (i / 16 - Math.floor(i / 16)) * 16;
  }
  result = result.map((n) => {
    if (n > 9 && n < 16) {
      n = String.fromCharCode(n + 55);
    }
    return n;
  });
  return result.reverse().join("");
};

console.log(decToHex(1352465124135));
