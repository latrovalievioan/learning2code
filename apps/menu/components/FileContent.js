const FileContent = () => {
  const container = mkElem("div", { class: "file-content" });
  const fileName = mkElem("h2");
  container.appendChild(fileName);
  const pre = mkElem("pre");
  container.appendChild(pre);
  const setContent = (fileContent) => {
    pre.innerText = fileContent;
  };
  const setFileName = (name) => {
    fileName.innerText = name;
  };

  return {
    domElement: container,
    setContent,
    setFileName,
  };
};
