const renderInputs = (containerID) => {
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  const clearButton = document.createElement("button");
  clearButton.innerHTML = "Clear";
  const arrValues = [];
  const container = document.getElementById(containerID);
  container.appendChild(saveButton);

  for (let i = 0; i < 5; i++) {
    const input = document.createElement("input");
    const savedValues = JSON.parse(localStorage.getItem("values"));
    if (savedValues !== null && savedValues[i] !== undefined) {
      input.value = savedValues[i];
    }

    container.appendChild(input);
    saveButton.addEventListener("click", () => {
      arrValues[i] = input.value;
      localStorage.setItem("values", JSON.stringify(arrValues));
    });
  }
  container.appendChild(clearButton);
  clearButton.addEventListener("click", localStorage.clear());
};

renderInputs("divInput");
