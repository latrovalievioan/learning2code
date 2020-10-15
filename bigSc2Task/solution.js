const input = require("fs") // required to work with the filesystem
  .readFileSync(0) // read a buffer from stdin file descriptor
  .toString("utf8") // convert the buffer to a string
  .trim()
  .split(/\r|\n/);

let resourcesGathered = {};
let resourcesSpent = {};
let unitsBuilt = {};
let unitsLost = {};
let priceList = {};
let unitsAlive = {};

const priceHandler = (words) => {
  let currentUnit = words[0];
  priceList[currentUnit] = {};
  if (priceList[currentUnit]["minerals"] === undefined) {
    priceList[currentUnit]["minerals"] = 0;
  }
  priceList[currentUnit]["minerals"] += Number(words[2]);
  if (priceList[currentUnit]["vespene"] === undefined) {
    priceList[currentUnit]["vespene"] = 0;
  }
  priceList[currentUnit]["vespene"] += Number(words[5]);
};

const handleGather = (words) => {
  let currentPlayer = words[0] + words[1];
  if (resourcesGathered[currentPlayer] === undefined) {
    resourcesGathered[currentPlayer] = { minerals: 0, vespene: 0 };
  }

  let quantity = Number(words[3]);

  if (words[4] === "minerals") {
    resourcesGathered[currentPlayer].minerals += quantity;
  } else {
    resourcesGathered[currentPlayer].vespene += quantity;
  }
};

const handleBuild = (words) => {
  let amount = words[3];
  let currentPlayer = words[0] + words[1];
  if (resourcesSpent[currentPlayer] === undefined) {
    resourcesSpent[currentPlayer] = { minerals: 0, vespene: 0 };
  }
  if (unitsBuilt[currentPlayer] === undefined) {
    unitsBuilt[currentPlayer] = 0;
  }
  if (unitsAlive[currentPlayer] === undefined) {
    unitsAlive[currentPlayer] = {};
  }

  let currentUnit = words[4];

  if (currentUnit[currentUnit.length - 1] === "s") {
    currentUnit = currentUnit.slice(0, -1);
  }

  while (
    !(
      priceList[currentUnit]["minerals"] * Number(amount) <=
        resourcesGathered[currentPlayer]["minerals"] &&
      priceList[currentUnit]["vespene"] * Number(amount) <=
        resourcesGathered[currentPlayer]["vespene"]
    )
  ) {
    amount--;
  }
  unitsBuilt[currentPlayer] += Number(amount);
  if (unitsAlive[currentPlayer][currentUnit] === undefined) {
    unitsAlive[currentPlayer][currentUnit] = 0;
  }
  unitsAlive[currentPlayer][currentUnit] += Number(amount);

  resourcesSpent[currentPlayer]["minerals"] +=
    priceList[currentUnit]["minerals"] * Number(amount);
  resourcesSpent[currentPlayer]["vespene"] +=
    priceList[currentUnit]["vespene"] * Number(amount);
};

const handleLoseUnits = (words) => {
  let amount = words[3];
  let currentPlayer = words[0] + words[1];
  if (unitsLost[currentPlayer] === undefined) {
    unitsLost[currentPlayer] = 0;
  }
  unitsLost[currentPlayer] += Number(amount);
};

for (let i = 0; i < input.length; i++) {
  let line = input[i];
  let words = line.split(" ");
  if (words[1] === "costs") {
    priceHandler(words);
  }
  if (words[2] === "gathers") {
    handleGather(words);
  }
  if (words[2] === "builds") {
    handleBuild(words);
  }
  if (words[2] === "loses") {
    handleLoseUnits(words);
  }
}

console.log({
  unitsAlive,
  unitsBuilt,
  unitsLost,
  resourcesGathered,
  resourcesSpent,
});
