function constraint(txt) {
  let letters = {};
  txt = txt
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
  for (let j = 0; j < txt.length; j++) {
    if (txt[j] !== " ") {
      letters[txt[j]] = 0;
    }
  }
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] !== " ") {
      letters[txt[i]] += 1;
    }
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
  let arr = txt.split(" ");
  let isTautoGram = true;
  for (let y = 0; y < arr.length; y++) {
    if (arr[y][0] !== arr[0][0]) {
      isTautoGram = false;
    }
  }
  if (isTautoGram) {
    return "Tautogram";
  }
  let txtArray = txt.split(" ");
  let arrayNoRepeat = [];
  for (let q = 0; q < txtArray.length; q++) {
    let currentObj = {};
    for (let c = 0; c < txtArray[q].length; c++) {
      let element = txtArray[q][c];
      currentObj[element] = 0;
    }
    arrayNoRepeat.push(Object.keys(currentObj));
  }
  arrayNoRepeat = arrayNoRepeat.flat(Infinity);
  let objNoRepeat = {};
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
