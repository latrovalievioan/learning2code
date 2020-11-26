const renderInputs = (containerID) => {
  const arrValues = [];
  const container = document.getElementById(containerID);
  for (let i = 0; i < 5; i++) {
    const input = document.createElement("input");
    const savedValues = JSON.parse(localStorage.getItem("values"));
    if (savedValues !== null && savedValues[i] !== undefined) {
      input.value = savedValues[i];
    }

    container.appendChild(input);
    container.addEventListener("keyup", () => {
      arrValues[i] = input.value;
      localStorage.setItem("values", JSON.stringify(arrValues));
    });
  }
};

renderInputs("divInput");
