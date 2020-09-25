function reverseOdd(str) {
  let result = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; ++i) {
    let currentWord = str[i];
    if (currentWord.length % 2 === 0) {
      result.push(currentWord);
    } else {
      let reversedWord = [];
      for (let j = 0; j < currentWord.length; ++j) {
        let splittedWord = currentWord.split("");
        reversedWord[j] = splittedWord[splittedWord.length - j - 1];
      }
      result.push(reversedWord.join(""));
    }
  }

  return result.join(" ");
}

console.log(reverseOdd("One two three four"));
