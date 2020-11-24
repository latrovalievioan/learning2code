const generateObjects = (containerId) => {
  const container = document.getElementById(containerId);
  const object = DragabbleObject();
  container.appendChild(object.domElement);
};

generateObjects("object-container");
