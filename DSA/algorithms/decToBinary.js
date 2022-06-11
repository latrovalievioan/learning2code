const decToBinary = (num) => {
  let result = "";
  for (let i = num; i >= 1; i = Math.floor(i / 2)) {
    result += `${i % 2}`;
  }
  return result.split("").reverse().join("");
};

console.log(decToBinary(144));
