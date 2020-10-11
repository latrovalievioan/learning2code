const months = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};

function fiscalCode(person) {
  const result = [];
  result[0] = [];
  result[1] = [];
  const vowels = /a|e|i|o|u/gi;
  //first three
  for (let i = 0; i < person.surname.replace(vowels, "").length; i++) {
    if (result[0].length >= 3) {
      break;
    }
    result[0] += person.surname.replace(vowels, "")[i].toUpperCase();
  }
  for (let j = 0; j < person.surname.match(vowels).length; j++) {
    if (result[0].length >= 3) {
      break;
    }
    result[0] += person.surname.match(vowels)[j].toUpperCase();
  }
  if (result[0].length < 3) {
    result[0] += "X";
  }
  //secound three
  if (person.name.replace(vowels, "").length > 3) {
    result[1] += person.name.replace(vowels, "")[0].toUpperCase();
    result[1] += person.name.replace(vowels, "")[2].toUpperCase();
    result[1] += person.name.replace(vowels, "")[3].toUpperCase();
  } else {
    for (let y = 0; y < person.name.replace(vowels, "").length; y++) {
      if (result[1].length >= 3) {
        break;
      }
      result[1] += person.name.replace(vowels, "")[y].toUpperCase();
    }
  }
  for (let g = 0; g < person.name.match(vowels).length; g++) {
    if (result[1].length >= 3) {
      break;
    }
    result[1] += person.name.match(vowels)[g].toUpperCase();
  }
  if (result[1].length < 3) {
    result[1] += "X";
  }
  //last five
  result[2] = [];
  result[2] += person.dob.slice(person.dob.length - 2);
  result[2] += months[person.dob.split("/")[1]];
  result[2] +=
    person.gender === "M"
      ? Number(person.dob.split("/")[0]).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : Number(person.dob.split("/")[0]) + 40;
  return result.join("");
}

console.log(
  fiscalCode({
    name: "Brendan",
    surname: "Eich",
    gender: "M",
    dob: "1/12/1961",
  })
);
