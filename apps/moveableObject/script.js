const generateObjects = (containerId, color, top, left) => {
  const container = document.getElementById(containerId);
  const object = DragabbleObject(color, top, left);
  container.appendChild(object.domElement);
};
const objectState = JSON.parse(localStorage.getItem("objectState") || "[]");

const renderInput = (containerId) => {
  objectState.forEach((object) => {
    generateObjects(containerId, object.color, object.top, object.left);
  });
  const input = Input((event) => {
    if (event.key === "Enter") {
      const color = input.domElement.value;
      input.domElement.value = "";
      generateObjects(containerId, color);
    }
  });
  const container = document.getElementById(containerId);
  container.appendChild(input.domElement);
};

renderInput("object-container");
