const saveFilesToStorage = (files) => {
  return localStorage.setItem("previewerFiles", JSON.stringify(files));
};

const filesSeed = [
  { type: "file", filename: "index.html", content: "kontent" },
  { type: "file", filename: "style.css", content: "stilche ;)" },
  { type: "file", filename: "Hello.py", content: "print('Hello World')" },
  {
    type: "directory",
    filename: "files",
    content: [
      { type: "file", filename: "index1.html", content: "kontent1" },
      { type: "file", filename: "style1.css", content: "stilche ;)1" },
      { type: "file", filename: "Hello1.py", content: "print('Hello World')1" },
      {
        type: "directory",
        filename: "files",
        content: [
          { type: "file", filename: "index1.html", content: "kontent1" },
          { type: "file", filename: "style1.css", content: "stilche ;)1" },
          {
            type: "file",
            filename: "Hello1.py",
            content: "print('Hello World')1",
          },
        ],
      },
    ],
  },
];

const getFilesFromStorage = () => {
  return (
    JSON.parse(localStorage.getItem("previewerFiles")) || filesSeed.slice()
  );
};
