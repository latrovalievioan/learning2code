const PrevFileList = (files, selectFile) => {
  const list = mkElem("ol", { class: "files-list" });

  const addFile = (file) => {
    const li = mkElem("li", { class: "file-item" });
    li.innerText = file.filename;
    li.addEventListener("click", () => {
      selectFile(file);
    });
    list.appendChild(li);
    return li;
  };

  const fileListItems = files
    .slice()
    .sort((left, right) => left.filename.localeCompare(right.filename))
    .map(addFile);

  return {
    domElement: list,
    addFile,
  };
};
