const ResizeElement = (onWidthChange) => {
  const resize = mkElem("div", { class: "resize", style: "left: 224px" });

  const onMouseMove = (event) => {
    resize.style.left = `${event.x}px`;
    if (event.x < 210) {
      onWidthChange(0);
      resize.style.left = `${0}px`;
    } else {
      onWidthChange(event.x);
    }
  };

  resize.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", onMouseMove);
  });

  resize.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });

  return { domElement: resize };
};
