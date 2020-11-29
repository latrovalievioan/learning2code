const PrevFileList = (files) => {
  const list = mkElem("ol", { class: "files-list" });
  const sortedFiles = files
    .slice()
    .sort((left, right) => left.filename.localeCompare(right.filename))
    .map((file) => {
      const li = mkElem("li", { class: "file-item" });
      li.innerText = file.filename;
      list.appendChild(li);
      return li;
    });

  return {
    domElement: list,
  };
};
