const Log = () => {
  const logContainer = document.createElement("div");
  logContainer.setAttribute("class", "log");
  const newLine = (line) => {
    logContainer.innerHTML += line + "<br/>";
    logContainer.scrollTop = logContainer.scrollHeight;
  };
  return { domElement: logContainer, newLine };
};
