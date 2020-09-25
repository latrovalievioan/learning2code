function distanceToNearestVowel(str) {
  let result = [];
  let regex = /[aeiou]/;
  for (let i = 0; i < str.length; i++) {
    let distanceRight, distanceLeft;
    for (let x = i; x < str.length; x++) {
      if (regex.test(str[x])) {
        distanceRight = x - i;
        break;
      }
    }
    for (let y = i; y >= 0; y--) {
      if (regex.test(str[y])) {
        distanceLeft = i - y;
        break;
      }
    }
    if (distanceLeft && distanceRight) {
      result[i] = Math.min(distanceLeft, distanceRight);
    } else if (distanceRight) {
      result[i] = distanceRight;
    } else if (distanceLeft) {
      result[i] = distanceLeft;
    } else if (regex.test(str[i])) {
      result[i] = 0;
    }
  }
  return result;
}

console.log(distanceToNearestVowel("aabbbbbbbbbbbbbaa"));
