function numInStr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    let hasNumber = false;
    let currentWord = arr[i];
    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];
      if (!isNaN(currentLetter) && currentLetter !== " ") {
        hasNumber = true;
      }
    }
    if (hasNumber) {
      result.push(currentWord);
    }
  }
  return result;
}

console.log(numInStr(["1", "a", " ", "b"]));
