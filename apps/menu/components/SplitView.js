const SplitView = (leftElement, rightElement) => {
  const leftContainer = mkElem("div", { class: "left-container" });
  leftContainer.appendChild(leftElement);
  const rightContainer = mkElem("div", { class: "right-container" });
  rightContainer.appendChild(rightElement);

  const container = mkElem("div", { class: "split-view" });
  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  return {
    domElement: container,
  };
};
