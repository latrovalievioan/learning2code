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
        const isCompleted = mkElem("div", { class: "is-completed" });
        body.innerHTML = (todo.text || "text").split(/\b/gi).slice(1).join("");
        name.innerHTML = (todo.text || "todo").split(/\b/gi)[0];
        date.innerHTML = todo.createdAt || "date";
        isCompleted.innerHTML = todo.isCompleted;
        console.log(todo);
        li.appendChild(name);
        li.appendChild(body);
        li.appendChild(date);
        li.appendChild(isCompleted);
        list.appendChild(li);
      });
    });
  container.appendChild(list);
};

renderTodos("app-root");
