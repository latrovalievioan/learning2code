const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split("\n");
const arrayOfAll = [];
const result = [];
const regex = /commit/;
const regex2 = /Date:/;
const regexWhiteLine = /^\s*$/gi;
for (let i = 0, x = 1; i < input.length; i++) {
  if (regex.test(input[i].split(" ")[0])) {
    const commitLine = input[i];
    arrayOfAll.push(commitLine.split(" ")[1].slice(0, 7));
  }
  if (regex2.test(input[i].split(" ")[0])) {
    if (regexWhiteLine.test(input[i + x])) {
      x++;
    }
    arrayOfAll.push(input[i + x]);
  }
}
for (let j = 0, x = 0; j < arrayOfAll.length / 2; j += 2, x++) {
  result[x] = arrayOfAll[j].trim() +" "+ arrayOfAll[j + 1].trim();
}

console.log(result.join("\n"));
