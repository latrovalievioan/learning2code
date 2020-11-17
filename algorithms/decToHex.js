const decToHex = (num) => {
  let result = [];
  for (let i = num, j = 0; i >= 1; i = Math.floor(i / 16), j++) {
    result[j] = (i / 16 - Math.floor(i / 16)) * 16;
    if (result[j] > 9 && result[j] < 16) {
      result[j] = String.fromCharCode(result[j] + 55);
    }
  }
  return result.reverse().join("");
};

console.log(decToHex(15));
