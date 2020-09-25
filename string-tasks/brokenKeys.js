function findBrokenKeys(str1, str2) {
  let brokenKeys = {};
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] !== str2[i]) {
      brokenKeys[str1[i]] = "";
    }
  }
  return Object.keys(brokenKeys);
}

console.log(findBrokenKeys("happy birthday", "hawwz birthday"));
