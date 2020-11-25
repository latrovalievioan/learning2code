const DragabbleObject = (color) => {
  const object = document.createElement("div");
  object.style.backgroundColor = color;
  object.setAttribute("class", "object");
  let offsetX = 25;
  let offsetY = 25;
  const onMouseMove = (event) => {
    const oRect = object.getBoundingClientRect();
    const pRect = object.parentElement.getBoundingClientRect();
    const maxTop = pRect.bottom - oRect.height;
    const maxLeft = pRect.right - oRect.width;
    const newTop = Math.max(0, Math.min(event.clientY - offsetY, maxTop));
    const newLeft = Math.max(0, Math.min(event.clientX - offsetX, maxLeft));
    object.style.top = `${newTop}px`;
    object.style.left = `${newLeft}px`;
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
