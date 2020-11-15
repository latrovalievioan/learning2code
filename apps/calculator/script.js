function EQ(toEval) {
  const regex1 = /\(/g;
  const regex2 = /\)/g;
  let diffBrackets;
  if (toEval.match(regex1) !== null) {
    if (toEval.match(regex2) === null) {
      diffBrackets = toEval.match(regex1).length;
    } else {
      diffBrackets = toEval.match(regex1).length - toEval.match(regex2).length;
    }

    for (let i = 0; i < diffBrackets; i++) {
      toEval += ")";
    }
  }
  return toEval;
}

const decToBinary = (num) => {
  let result = "";
  for (let i = num; i >= 1; i = Math.floor(i / 2)) {
    result += `${i % 2}`;
  }
  return result.split("").reverse().join("");
};

const decToHex = (num) => {
  let result = [];
  for (let i = num, j = 0; i >= 1; i = Math.floor(i / 16), j++) {
    result[j] = (i / 16 - Math.floor(i / 16)) * 16;
  }
  result = result.map((n) => {
    if (n > 9 && n < 16) {
      n = String.fromCharCode(n + 55);
    }
    return n;
  });
  return result.reverse().join("");
};

const decToOctal = (num) => {
  let result = "";
  for (let i = num; i >= 1; i = Math.floor(i / 8)) {
    result += `${(i / 8 - Math.floor(i / 8)) * 8}`;
  }
  return result.split("").reverse().join("");
};

const buttons = Array.from(document.getElementsByTagName("button"));
const prev = document.getElementById("previous");
const current = document.getElementById("current");
const hex = document.getElementById("hex");
const oct = document.getElementById("oct");
const bin = document.getElementById("bin");
let toEval = "";
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (button.classList[0] !== "op") {
      if (button.id === "PI") {
        current.innerHTML += Math.PI;
        toEval += Math.PI;
      } else {
        current.innerHTML += button.id;
        toEval += button.id;
      }
    } else {
      if (button.classList[1] !== "special") {
        if (!isNaN(Number(toEval[toEval.length - 1]))) {
          toEval = eval(toEval);
          toEval += button.id;
          prev.innerHTML = toEval;
          current.innerHTML = "";
        } else {
          toEval = toEval.substring(0, toEval.length - 1) + button.id;
          prev.innerHTML = toEval;
        }
      } else if (button.id === "=") {
        toEval = EQ(toEval);
        prev.innerHTML = "";
        current.innerHTML = eval(toEval);
        hex.innerHTML = decToHex(Number(current.innerHTML));
        oct.innerHTML = decToOctal(Number(current.innerHTML));
        bin.innerHTML = decToBinary(Number(current.innerHTML));
      } else if (button.id === "AC") {
        toEval = "";
        prev.innerHTML = "";
        current.innerHTML = "";
      } else if (button.id === "DEL") {
        current.innerHTML = current.innerHTML.substring(
          0,
          current.innerHTML.length - 1
        );
        if (!isNaN(toEval[toEval.length - 1])) {
          toEval = toEval.substr(0, toEval.length - 1);
        }
      }
    }
  })
);

function show() {
  document.getElementById("sidebar").classList.toggle("active");
}
