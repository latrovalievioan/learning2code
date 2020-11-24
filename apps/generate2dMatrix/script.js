const matrixVis = (containerId) => {
  const frag = document.createDocumentFragment();
  const container = document.getElementById(containerId);
  const input = Input();
  frag.appendChild(input.domElement);
  container.appendChild(frag);
  const submitHandle = (e) => {
    if (e.key === "Enter") {
      const matrix = GenerateMatrix(input.domElement.value);
      container.appendChild(matrix.domElement);
    }
  };
  input.domElement.addEventListener("keydown", submitHandle);
};

matrixVis("container");
