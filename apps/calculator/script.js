const buttons = Array.from(document.getElementsByTagName("button"));
let prev = document.getElementById("previous");
let current = document.getElementById("current");
let toEval = "";
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (button.classList[0] !== "op") {
      current.innerHTML += button.id;
      toEval += button.id;
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
        prev.innerHTML = "";
        current.innerHTML = eval(toEval);
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
