const buttons = Array.from(document.getElementsByTagName("button"));
let toEval = "";
let specialRegex = /special/gi;
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (!specialRegex.test(button.className)) {
      toEval += button.id;
      if (button.className === "num") {
        document.getElementById("current").innerHTML += button.id;
      } else {
        document.getElementById("previous").innerHTML =
          eval(
            document.getElementById("previous").innerHTML +
              document.getElementById("current").innerHTML
          ) + button.id;
        document.getElementById("current").innerHTML = "";
      }
    } else if (button.id === "=") {
      document.getElementById("current").innerHTML = eval(toEval);
      document.getElementById("previous").innerHTML = "";
      toEval = eval(toEval);
    } else if (button.id === "AC") {
      toEval = "";
      document.getElementById("current").innerHTML = "";
      document.getElementById("previous").innerHTML = "";
    } else if (button.id === "DEL") {
      document.getElementById("current").innerHTML = document
        .getElementById("current")
        .innerHTML.substring(
          0,
          document.getElementById("current").innerHTML.length - 1
        );
      toEval = toEval.substring(0, toEval.length - 1);
    }
  })
);
