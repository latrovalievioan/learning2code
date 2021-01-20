const renderTodos = (containerId) => {
  const container = document.getElementById(containerId);
  const list = mkElem("ul", { class: "todo-list" });
  fetch("http://localhost:8000/todoList/todos")
    .then((x) => x.json())
    .then((json) => {
      json.forEach((todo) => {
        const li = mkElem("li", { class: "todo" });
        const name = mkElem("div", { class: "name" });
        const body = mkElem("div", { class: "body" });
        const date = mkElem("div", { class: "date" });
        const completeButton = mkElem("img", {});
        completeButton.addEventListener("click", () => {
          completeButton.setAttribute("src", "./images/checked.png");
        });
        body.innerHTML = (todo.text || "text").split(/\b/gi).slice(1).join("");
        name.innerHTML = (todo.text || "todo").split(/\b/gi)[0];
        date.innerHTML = todo.createdAt || "date";
        if (todo.isCompleted) {
          completeButton.setAttribute("class", "completed");
          completeButton.setAttribute("src", "./images/checked.png");
        } else {
          completeButton.setAttribute("class", "noCompleted");
          completeButton.setAttribute("src", "./images/timer.png");
        }
        console.log(todo);
        const header = mkElem("div", { class: "header" });
        header.appendChild(name);
        header.appendChild(date);
        li.appendChild(header);
        li.appendChild(body);

        li.appendChild(completeButton);
        list.appendChild(li);
      });
    });
  container.appendChild(list);
};

renderTodos("app-root");
