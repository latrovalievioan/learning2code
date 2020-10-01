function staircase(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    string += "_".repeat(n - i);
    string += "#".repeat(i) + "\n";
  }
  for (let j = 0; j > n; j--) {
    string += "_".repeat(Math.abs(j));
    string += "#".repeat(Math.abs(n - j)) + "\n";
  }
  return string.trim();
}

console.log(staircase(-8));
