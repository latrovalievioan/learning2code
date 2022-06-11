const decToOctal = (num) => {
  let result = "";
  for (let i = num; i >= 1; i = Math.floor(i / 8)) {
    result += `${(i / 8 - Math.floor(i / 8)) * 8}`;
  }
  return result.split("").reverse().join("");
};

console.log(decToOctal(394));
