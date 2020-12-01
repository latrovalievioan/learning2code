const saveFilesToStorage = (files) => {
  return localStorage.setItem("previewerFiles", JSON.stringify(files));
};

const filesSeed = [
  { type: "file", filename: "index.html", content: "kontent" },
  { type: "file", filename: "style.css", content: "stilche ;)" },
  { type: "file", filename: "Hello.py", content: "print('Hello World')" },
];

const getFilesFromStorage = () => {
  return (
    JSON.parse(localStorage.getItem("previewerFiles")) || filesSeed.slice()
  );
};
