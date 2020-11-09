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
        toEval = eval(toEval);
      }
    } else if (button.id === "=") {
      if (eval(toEval) === 42) {
        document.getElementById("previous").innerHTML =
          "You have found the meaning of life!";
      } else if (eval(toEval) === 666) {
        document.getElementById("previous").innerHTML =
          "Don't mess with the bad guy!";
      } else if (eval(toEval) === 69) {
        document.getElementById("previous").innerHTML = "Nasty!";
      } else {
        document.getElementById("previous").innerHTML = "";
      }
      document.getElementById("current").innerHTML = eval(toEval);

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
