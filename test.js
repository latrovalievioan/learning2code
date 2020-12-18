const fn = () => {
  const x = 5;
  const ft = () => {
    x = 10;
  };
  return { x, ft };
};

let h = fn();
h.ft();
console.log(h);
