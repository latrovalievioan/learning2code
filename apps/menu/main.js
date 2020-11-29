const main = () => {
  const mainContainer = document.querySelector("main");

  const files = [
    { type: "file", filename: "index.html", content: "kontent" },
    { type: "file", filename: "style.css", content: "stilche ;)" },
    { type: "file", filename: "Hello.py", content: "print('Hello World')" },
  ];
  const filesList = PrevFileList(files);

  const rightSpan = document.createElement("span");
  rightSpan.innerHTML = "right";

  const splitView = SplitView(filesList.domElement, rightSpan);
  mainContainer.appendChild(splitView.domElement);
};

main();
