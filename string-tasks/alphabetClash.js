function alphaClash(str_A, ind_A, str_Z, ind_Z) {
  let result = {};
  result.A = 0;
  result.Z = 0;
  str_A = Array.from(str_A);
  str_Z = Array.from(str_Z);
  for (let i = 0; i < ind_A.length; i++) {
    let removeFromZindex = ind_A[i];
    let removeFromAindex = ind_Z[i];
    str_A.splice(removeFromAindex, 1, " ");
    str_Z.splice(removeFromZindex, 1, " ");
  }
  str_A = str_A.filter((a) => a != " ").join("");
  str_Z = str_Z.filter((a) => a != " ").join("");
  for (let j = 0; j < str_Z.length; j++) {
    let charCodeA = str_A.charCodeAt(j);
    let charCodeZ = str_Z.charCodeAt(j);
    if (charCodeA > charCodeZ) {
      result.A += charCodeA - charCodeZ;
    } else result.Z += charCodeZ - charCodeA;
  }
  return result;
}

console.log(
  alphaClash(
    "MZNHUVIOEPTWFJCBXKALSDQGYR",
    [1, 3, 2, 8, 10, 12, 9, 7, 4, 22],
    "YFTUCSQOMGKPXNDWHIVJRABZEL",
    [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
  )
);
