const DragabbleObject = () => {
  const object = document.createElement("div");
  object.setAttribute("class", "object");
  let offsetX = 25;
  let offsetY = 25;
  const onMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    ///bottom border
    if (
      mouseY - offsetY >
      object.parentElement.offsetHeight -
        (object.getBoundingClientRect().bottom -
          object.getBoundingClientRect().top)
    ) {
    } else {
      object.style = `top:${mouseY - offsetY}px;
      left:${mouseX - offsetX}px`;
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
