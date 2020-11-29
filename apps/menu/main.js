const main = () => {
  const mainContainer = document.querySelector("main");

  const files = [
    { type: "file", filename: "index.html", content: "kontent" },
    { type: "file", filename: "style.css", content: "stilche ;)" },
    { type: "file", filename: "Hello.py", content: "print('Hello World')" },
  ];
  const fileContent = FileContent();
  let selectedFile;
  const selectFile = (file) => {
    selectedFile = file;
    fileContent.setContent(file.content);
    fileContent.setFileName(file.filename);
  };
  const filesList = PrevFileList(files, selectFile);

  const addFile = (filename) => {
    const newFile = {
      type: "file",
      filename: filename,
      content: "",
    };
    files.push(newFile);
    filesList.addFile(newFile);
  };

  const fileActions = FileActions(addFile);

  const leftElement = document.createDocumentFragment();
  leftElement.appendChild(fileActions.domElement);
  leftElement.appendChild(filesList.domElement);

  const splitView = SplitView(leftElement, fileContent.domElement);
  mainContainer.appendChild(splitView.domElement);
};

main();
