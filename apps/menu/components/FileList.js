const PrevFileList = (files, selectFile) => {
  const list = mkElem("ol", { class: "files-list" });

  const addFile = (file) => {
    const li = mkElem("li", {
      class: "file-item",
      "data-filename": file.filename,
    });
    li.innerText = file.filename;
    li.addEventListener("click", () => {
      selectFile(file);
    });
    list.appendChild(li);
    return li;
  };

  files.forEach(addFile);

  const removeFile = (file) => {
    for (let i = 0; i < list.children.length; i++) {
      const liFileName = list.children[i].getAttribute("data-filename");
      if (liFileName === file.filename) {
        list.children[i].remove();
      }
    }
  };

  return {
    domElement: list,
    addFile,
    removeFile,
  };
};
