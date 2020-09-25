function vowelLinks(str) {
  let result = false;
  str = str.toLowerCase();
  str = str.split(" ");
  let regex = /[aeiou]/;
  for (let i = 0; i < str.length - 1; ++i) {
    let currentWord = str[i];
    let nextWord = str[i + 1];
    if (
      regex.test(currentWord[currentWord.length - 1]) &&
      regex.test(nextWord[0])
    ) {
      result = true;
    }
  }
  return result;
}

console.log(vowelLinks("An open fire"));
