const main = () => {
  const mainContainer = document.querySelector("main");

  const files = getFilesFromStorage();
  const fileContent = FileContent();
  let selectedFile;
  const selectFile = (file) => {
    selectedFile = file;
    fileContent.setContent(file.content);
    fileContent.setFileName(file.filename);
  };

  fileContent.pre.addEventListener("keyup", (e) => {
    if (selectedFile !== undefined) {
      const selectedFileIndex = files.findIndex(
        (f) => f.filename === selectedFile.filename
      );
      console.log(selectedFile);
      files[selectedFileIndex].content = fileContent.pre.innerText;
    }
    saveFilesToStorage(files);
  });

  const filesList = PrevFileList(files, selectFile);

  const addFile = (filename) => {
    const newFile = {
      type: "file",
      filename: filename,
      content: "",
    };
    files.push(newFile);
    filesList.addFile(newFile);
    saveFilesToStorage(files);
  };

  const deleteSelectedFile = () => {
    if (!selectedFile) {
      return;
    }
    filesList.removeFile(selectedFile);
    const selectedFileIndex = files.findIndex(
      (f) => f.filename === selectedFile.filename
    );
    files.splice(selectedFileIndex, 1);
    saveFilesToStorage(files);
    if (files[0]) {
      selectFile(files[0]);
    } else {
      fileContent.setContent("");
      fileContent.setFileName("");
    }
  };

  const fileActions = FileActions(addFile, deleteSelectedFile);

  const leftElement = document.createDocumentFragment();
  leftElement.appendChild(fileActions.domElement);
  leftElement.appendChild(filesList.domElement);

  const splitView = SplitView(leftElement, fileContent.domElement);
  mainContainer.appendChild(splitView.domElement);
};

main();
