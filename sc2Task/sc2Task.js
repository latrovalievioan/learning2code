const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split("\n");
let players = {};
for (let i = 0; i < input.length; i++) {
  let line = input[i].split(" ");
  let playerID = line[0] + line[1];
  if (players[playerID] === undefined) {
    players[playerID] = {};
  }
  let unitID = line[4];
  if (unitID[unitID.length - 1] === "s") {
    unitID = unitID.slice(0, -1);
  }

  if (players[playerID][unitID] === undefined) {
    players[playerID][unitID] = 0;
  }

  let plus = line[3] === "a" ? 1 : Number(line[3]);
  players[playerID][unitID] += plus;
}
console.log(players);
