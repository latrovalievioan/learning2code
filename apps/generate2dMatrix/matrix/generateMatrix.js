const GenerateMatrix = (value) => {
  const rowsCols = value.split("*");
  const rows = Number(rowsCols[0]);
  const cols = Number(rowsCols[1]);
  const length = eval(value);
  const matrix = document.createElement("div");
  matrix.setAttribute("class", "matrix");
  matrix.setAttribute(
    "style",
    `grid-template-columns: repeat(${cols}, 40px);
     grid-template-rows: repeat(${rows}, 40px)  `
  );
  for (let i = 0; i < length; i++) {
    const button = document.createElement("button");
    matrix.appendChild(button);
  }
  const pressHandler = (e) => {
    for (let j = 0; j < matrix.children.length; j++) {
      console.log(e.key);
      if (matrix.children[j] === document.activeElement) {
        if (e.key === " ") {
          matrix.children[j].setAttribute("class", "u-shall-not-pass");
          break;
        }
        if (
          e.key === "ArrowLeft" &&
          matrix.children[j - 1] !== undefined &&
          !matrix.children[j - 1].classList.contains("u-shall-not-pass")
        ) {
          matrix.children[j - 1].focus();
          matrix.children[j - 1].setAttribute("class", "trail");
          break;
        } else if (
          e.key === "ArrowUp" &&
          matrix.children[j - cols] !== undefined &&
          !matrix.children[j - cols].classList.contains("u-shall-not-pass")
        ) {
          matrix.children[j - cols].focus();
          matrix.children[j - cols].setAttribute("class", "trail");
          break;
        } else if (
          e.key === "ArrowRight" &&
          matrix.children[j + 1] !== undefined &&
          !matrix.children[j + 1].classList.contains("u-shall-not-pass")
        ) {
          matrix.children[j + 1].focus();
          matrix.children[j + 1].setAttribute("class", "trail");
          break;
        } else if (
          e.key === "ArrowDown" &&
          matrix.children[j + cols] !== undefined &&
          !matrix.children[j + cols].classList.contains("u-shall-not-pass")
        ) {
          matrix.children[j + cols].focus();
          matrix.children[j + cols].setAttribute("class", "trail");
          break;
        }
      }
    }
  };
  matrix.addEventListener("keydown", pressHandler);

  return { domElement: matrix };
};
