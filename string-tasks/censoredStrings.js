function uncensor(str, vowels) {
  let uncensored = "";
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      uncensored += vowels[x];
      x++;
    } else {
      uncensored += str[i];
    }
  }
  return uncensored;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
