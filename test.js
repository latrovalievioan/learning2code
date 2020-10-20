const els = [1, 2, 3, 4, 5, NaN, 124125115125, 2];
console.log(els.every((el) => typeof el === "number"));
