const PrevFileList = (files, selectFile) => {
  const list = mkElem("ol", { class: "files-list" });

  const addFile = (file) => {
    const li = mkElem("li", {
      class: "file-item",
      "data-filename": file.filename,
    });
    const regex = /\..+/gi;
    if (file.filename.match(regex) === null) {
      file.filename += ".txt";
      li.setAttribute("data-filename", `${file.filename}`);
    }
    ///get extension to class
    li.classList.add(`${file.filename.match(regex).join().replace(".", "")}`);
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
