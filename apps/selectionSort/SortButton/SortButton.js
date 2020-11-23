const SortButton = (clickHandle) => {
  const button = document.createElement("button");
  button.setAttribute("class", "sort-button");
  button.innerText = "Start";
  const setText = (text) => (button.innerText = text);
  button.addEventListener("click", clickHandle);
  return { domElement: button, setText };
};
