const PrevFileList = (files, selectFile) => {
  const list = mkElem("ol", { class: "files-list" });

  const addFile = (file) => {
    const span = mkElem("span");
    if (file.type === "file") {
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
      span.innerText = file.filename;

      li.addEventListener("click", (e) => {
        const previous = document.querySelector("li.selected.file-item");
        if (previous) {
          previous.classList.remove("selected");
        }
        e.stopPropagation();
        li.classList.add("selected");
        selectFile(file);
      });
      li.appendChild(span);
      list.appendChild(li);
      return li;
    } else if (file.type === "directory") {
      const directLi = mkElem("li", { class: "directory" });
      span.innerText = file.filename;
      const directory = PrevFileList(file.content, selectFile);
      directLi.appendChild(span);
      directLi.appendChild(directory.domElement);
      directLi.addEventListener("click", (e) => {
        e.stopPropagation();
        directLi.lastChild.classList.toggle("hidden");
      });

      list.appendChild(directLi);
    }
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
