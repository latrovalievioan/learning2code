const ResizeElement = () => {
  const resize = mkElem("div", { class: "resize", style: "left: 224px" });

  const onMouseMove = (event) => {
    resize.style.left = `${event.x}px`;
  };

  resize.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", onMouseMove);
  });

  resize.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });

  return { domElement: resize };
};
