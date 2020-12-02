const SplitView = (leftElement, rightElement) => {
  const leftContainer = mkElem("div", { class: "left-container" });
  leftContainer.appendChild(leftElement);

  const rightContainer = mkElem("div", { class: "right-container" });
  rightContainer.appendChild(rightElement);

  const onWidthChange = (leftWidth, rightWidth) => {
    leftContainer.style.width = `${leftWidth}px`;
    rightContainer.style.width = `${rightWidth}px`;
  };
  const middleContainer = mkElem("div", { class: "middle-container" });
  const resizeElem = ResizeElement(onWidthChange);
  middleContainer.appendChild(resizeElem.domElement);

  const container = mkElem("div", { class: "split-view" });
  container.appendChild(leftContainer);
  container.appendChild(middleContainer);
  container.appendChild(rightContainer);

  return {
    domElement: container,
  };
};
