function doubleSwap(str, c1, c2) {
  let result = "";
  for (let i = 0; i < str.length; ++i) {
    let currentChar = str[i];
    if (currentChar === c1) {
      result += c2;
    } else if (currentChar === c2) {
      result += c1;
    } else {
      result += currentChar;
    }
  }
  return result;
}

console.log(doubleSwap("aabbccc", "a", "b"));
