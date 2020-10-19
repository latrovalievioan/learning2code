const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split(/\r|\n/);

let count = 0;
const regex = /<\/.+>|<.+\/>/;
input.forEach((line) => {
  if (regex.test(line)) {
    count += 1;
  }
});

console.log(count);
