function commentsCorrect(str) {
  const withoutBig = str.replace(/\/\*\*\//gi, "");
  const withoutSmall = withoutBig.replace(/\/\//gi, "");
  return withoutSmall === "";
}

console.log(commentsCorrect("///*/////"));
