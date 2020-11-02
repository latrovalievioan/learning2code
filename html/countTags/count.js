const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .replace(/\s\s+|\s/g, "");

const regex = /\/.*?>/gm;
const result = {};

input.match(regex).forEach((x) => {
  const newName = x.replace("/", "").replace(">", "");
  if (result[newName] === undefined) {
    result[newName] = 0;
  } else {
    result[newName] += 1;
  }
});

console.log(result);
