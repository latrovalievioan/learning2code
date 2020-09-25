function insertWhitespace(string) {
  let result = "";
  for (let i = 0; i < string.length - 1; i++) {
    let currentLetter = string[i];
    if (string[i + 1] === string[i + 1].toUpperCase()) {
      currentLetter = currentLetter + " ";
    }
    result += currentLetter;
  }
  result += string[string.length - 1];
  return result;
}

console.log(insertWhitespace("SheWalksToTheBeach"));
