function caesarCipher(s, k) {
  let result = [];
  let charCodes = [];
  sToLower = s.toLowerCase();
  for (let i = 0; i < sToLower.length; i++) {
    let code = sToLower.charCodeAt(i);
    if (code < 65 || code > 122) {
      charCodes[i] = sToLower[i];
    } else {
      charCodes[i] = code;
    }
  }
  for (let x = 0; x < charCodes.length; x++) {
    let code = charCodes[x];
    if (code >= 97 && code + k > 122) {
      charCodes[x] = ((code + k - 97) % 26) + 97;
    } else if (!isNaN(code) && code !== " ") {
      charCodes[x] += k;
    }
    if (!isNaN(code) && code !== " ") {
      result[x] = String.fromCharCode(charCodes[x]);
    } else {
      result[x] = charCodes[x];
    }
  }
  for (let z = 0; z < sToLower.length; z++) {
    if (s[z] !== s[z].toLowerCase()) {
      result[z] = result[z].toUpperCase();
    }
  }
  result = result.join("");

  return result;
}

console.log(caesarCipher("A friend in need is a friend indeed", 20));
