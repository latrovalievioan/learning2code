const FileActions = (addFile, onDelFile) => {
  const container = mkElem("div", { class: "file-actions" });

  const newFileInput = mkElem("input", { class: "file-name-input hidden" });
  newFileInput.addEventListener("change", () => {
    addFile(newFileInput.value);
  });
  container.appendChild(newFileInput);

  const newFileButton = mkElem("button", { class: "new-file-button" });
  newFileButton.innerText = "New File";
  container.appendChild(newFileButton);
  newFileButton.addEventListener("click", () => {
    newFileInput.classList.remove("hidden");
  });

  const delFileButton = mkElem("button", { class: "del-file-button" });
  delFileButton.innerText = "Delete File";
  container.appendChild(delFileButton);
  delFileButton.addEventListener("click", () => onDelFile());

  return {
    domElement: container,
  };
};
