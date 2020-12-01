const FileContent = () => {
  const container = mkElem("div", { class: "file-content" });
  const fileName = mkElem("h2", { class: "hidden" });
  container.appendChild(fileName);
  const pre = mkElem("pre");
  container.appendChild(pre);
  const setContent = (fileContent) => {
    pre.innerText = fileContent;
  };
  const setFileName = (name) => {
    fileName.innerText = name;
    fileName.classList.remove("hidden");
  };

  return {
    domElement: container,
    setContent,
    setFileName,
  };
};
