const SplitView = (leftElement, middleElement, rightElement) => {
  const leftContainer = mkElem("div", { class: "left-container" });
  leftContainer.appendChild(leftElement);
  const rightContainer = mkElem("div", { class: "right-container" });
  rightContainer.appendChild(rightElement);
  const middleContainer = mkElem("div", { class: "middle-container" });
  middleContainer.appendChild(middleElement);

  const container = mkElem("div", { class: "split-view" });
  container.appendChild(leftContainer);
  container.appendChild(middleElement);
  container.appendChild(rightContainer);

  return {
    domElement: container,
  };
};
