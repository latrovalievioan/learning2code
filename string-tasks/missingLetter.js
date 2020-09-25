function missingLetter(str) {
  let missing = false;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].charCodeAt() + 1 !== str[i + 1].charCodeAt()) {
      let letterMissing = str[i].charCodeAt() + 1;
      letterMissing = String.fromCharCode(letterMissing);
      missing = true;
      return letterMissing;
    }
  }
  return "No Missing Letter";
}

console.log(missingLetter("abcdefg"));
