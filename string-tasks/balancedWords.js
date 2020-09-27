function balanced(word) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < word.length / 2; i++) {
    leftSum += word.charCodeAt(i);
    rightSum += word.charCodeAt(i + word.length / 2);
  }
  return leftSum === rightSum;
}

console.log(balanced("vegetation"));
