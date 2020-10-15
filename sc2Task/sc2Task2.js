const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split("\n");
let units = {};
for (let i = 0; i < input.length; i++) {
  let currentLine = input[i].split(" ");
  let lastWord = currentLine[currentLine.length - 1];
  let lastLetter = lastWord[lastWord.length - 1];
  if (lastLetter === "s") {
    lastWord = lastWord.slice(0, -1);
  }

  if (units[lastWord] === undefined) {
    units[lastWord] = 0;
  }
  let plus =
    currentLine[currentLine.length - 2] === "a"
      ? 1
      : Number(currentLine[currentLine.length - 2]);
  units[lastWord] += plus;
}
console.log(units);
