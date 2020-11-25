const generateObjects = (containerId, color) => {
  const container = document.getElementById(containerId);
  const object = DragabbleObject(color);
  container.appendChild(object.domElement);
};
const renderInput = (containerId) => {
  const input = Input();
  const container = document.getElementById(containerId);
  container.appendChild(input.domElement);
  input.domElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const color = input.domElement.value;
      input.domElement.value = "";
      generateObjects(containerId, color);
    }
  });
};

renderInput("object-container");
