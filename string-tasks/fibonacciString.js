function fibStr(n, str) {
  let result = [str[0], str[1]];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result.join(", ");
}

console.log(fibStr(3, ["j", "h"]));
