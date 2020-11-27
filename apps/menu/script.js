const generateMenu = (containerId, arr) => {
  const arrCopy = arr.slice();
  const frag = document.createDocumentFragment();
  const fileViewer = document.getElementById(containerId);
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "menu-container");
  const menu = document.createElement("ul");

  if (JSON.parse(localStorage.getItem("files")) !== null) {
    JSON.parse(localStorage.getItem("files")).forEach((e) => {
      arrCopy.push(e);
    });
  }

  arrCopy.forEach((object) => {
    const li = document.createElement("li");
    li.classList.add(object.type);
    li.innerHTML = object.name;
    menu.appendChild(li);
    li.addEventListener("click", () => {
      display.innerText = object.content;
    });
  });
  const newFile = document.createElement("button");
  newFile.setAttribute("class", "new-file");
  newFile.innerText = "+";
  const arrLocalStorage = [];
  if (JSON.parse(localStorage.getItem("files")) !== null) {
    JSON.parse(localStorage.getItem("files")).forEach((e) => {
      arrLocalStorage.push(e);
    });
  }

  newFile.addEventListener("click", () => {
    console.log("kon");
    const li = document.createElement("li");
    li.innerHTML = '<input type="text" id="newFile"/>';
    li.addEventListener("keyup", (event) => {
      const newName = document.getElementById("newFile");
      if (event.key === "Enter") {
        li.innerHTML = newName.value;
        arrLocalStorage.push({
          type: "file",
          name: li.innerHTML,
          content: "blank",
        });

        localStorage.setItem("files", JSON.stringify(arrLocalStorage));
      }
    });
    menu.appendChild(li);
  });

  const display = document.createElement("div");
  display.setAttribute("id", "display");
  menuContainer.appendChild(menu);
  menuContainer.appendChild(newFile);
  frag.appendChild(menuContainer);
  frag.appendChild(display);
  fileViewer.appendChild(frag);
};

generateMenu("file-viewer", [
  { type: "file", name: "file.js", content: 'console.log("nikakyv cs")' },
  { type: "file", name: "index.html", content: "<h1>GE-VREK</h1>" },
]);
