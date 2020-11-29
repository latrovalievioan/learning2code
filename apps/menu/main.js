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

  const splitView = SplitView(filesList.domElement, fileContent.domElement);
  mainContainer.appendChild(splitView.domElement);
};

main();
