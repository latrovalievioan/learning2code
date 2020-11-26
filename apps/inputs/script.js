const renderInputs = (containerID) => {
  const button = document.createElement("button");
  button.innerHTML = "Save";
  const arrValues = [];
  const container = document.getElementById(containerID);
  container.appendChild(button);

  for (let i = 0; i < 5; i++) {
    const input = document.createElement("input");
    const savedValues = JSON.parse(localStorage.getItem("values"));
    if (savedValues !== null && savedValues[i] !== undefined) {
      input.value = savedValues[i];
    }

    container.appendChild(input);
    button.addEventListener("click", () => {
      arrValues[i] = input.value;
      localStorage.setItem("values", JSON.stringify(arrValues));
    });
  }
};

renderInputs("divInput");
