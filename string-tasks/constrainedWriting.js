function constraint(txt) {
  const letters = {};
  txt = txt
    .replace(/[^a-z\s]/gi, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] !== " ") {
      letters[txt[i]] = 0;
    }
    letters[txt[i]]++;
    if (Object.keys(letters).length === 26) {
      return "Pangram";
    }
  }
  let areUnique = true;
  for (let x = 0; x < Object.values(letters).length; x++) {
    if (Object.values(letters)[x] !== 1) {
      areUnique = false;
    }
  }
  if (areUnique) {
    return "Heterogram";
  }
  const arr = txt.split(" ");
  let isTautoGram = true;
  for (let y = 0; y < arr.length; y++) {
    if (arr[y][0] !== arr[0][0]) {
      isTautoGram = false;
    }
  }
  if (isTautoGram) {
    return "Tautogram";
  }
  const txtArray = txt.split(" ");
  let arrayNoRepeat = [];
  for (let q = 0; q < txtArray.length; q++) {
    const currentObj = {};
    for (let c = 0; c < txtArray[q].length; c++) {
      const element = txtArray[q][c];
      currentObj[element] = 0;
    }
    arrayNoRepeat.push(Object.keys(currentObj));
  }
  arrayNoRepeat = arrayNoRepeat.flat(Infinity);
  const objNoRepeat = {};
  for (let u = 0; u < arrayNoRepeat.length; u++) {
    objNoRepeat[arrayNoRepeat[u]] = 0;
  }
  for (let g = 0; g < arrayNoRepeat.length; g++) {
    objNoRepeat[arrayNoRepeat[g]] += 1;
  }
  for (let b = 0; b < Object.values(objNoRepeat).length; b++) {
    if (Object.values(objNoRepeat)[b] === txtArray.length) {
      return "Transgram";
    }
  }
  return "Sentence";
}

console.log(
  constraint("A cannibal alligator has attacked an unaware vegan alligator.")
);
