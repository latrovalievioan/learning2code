function rearrange(sentence) {
  let result = [];
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < sentence[i].length; j++) {
      if (sentence[i][j] == Number(sentence[i][j])) {
        result[sentence[i][j] - 1] = sentence[i].replace(sentence[i][j], "");
      }
    }
  }
  return result.join(" ");
}

console.log(rearrange("is3 Cri1stiano 4the Rona2ldo 5best."));
