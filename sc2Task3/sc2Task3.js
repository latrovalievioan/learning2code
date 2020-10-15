const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split(/\r?\n/);

let players = {};
let units = {};
for (let i = 0; i < input.length; i++) {
  let line = input[i].split(" ");
  let playerName = line[0] + line[1];
  let unitName = line[4];
  let operator = line[2];
  unitName =
    unitName[unitName.length - 1] === "s" ? unitName.slice(0, -1) : unitName;

  let count = line[3] === "a" ? 1 : Number(line[3]);
  if (players[playerName] === undefined) {
    players[playerName] = {};
  }
  if (players[playerName][unitName] === undefined) {
    players[playerName][unitName] = 0;
  }

  players[playerName][unitName] =
    operator === "builds"
      ? players[playerName][unitName] + count
      : players[playerName][unitName] - count;

  if (units[operator] === undefined) {
    units[operator] = {};
  }
  if (units[operator][unitName] === undefined) {
    units[operator][unitName] = 0;
  }
  units[operator][unitName] += count;
}

console.log(players, units);
