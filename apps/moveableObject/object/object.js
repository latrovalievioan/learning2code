const DragabbleObject = () => {
  const object = document.createElement("div");
  object.setAttribute("class", "object");
  let offsetX = 25;
  let offsetY = 25;
  const onMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    object.style = `top:${event.clientY - offsetY}px;
    left:${event.clientX - offsetX}px`;
    if (
      object.getBoundingClientRect().bottom > object.parentElement.offsetHeight
    ) {
      document.removeEventListener("mousemove", onMouseMove);
    }
  };
  object.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", onMouseMove);
    offsetX = event.clientX - object.offsetLeft;
    offsetY = event.clientY - object.offsetTop;
  });
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });

  return { domElement: object };
};
