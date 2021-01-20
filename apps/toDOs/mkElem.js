const mkElem = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }

  return element;
};
