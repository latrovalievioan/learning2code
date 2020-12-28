const container = document.getElementById("initial-content");
const welcome = mkElem("h1", { class: "welcome-text" });
welcome.innerText = "Give me an input, so I can render a list!";
const field = mkElem("input", { type: "text", class: "initial-input" });
const button = mkElem("button", { class: "initial-button" });
button.innerText = "Render List";
let arr = [];
const contextMenu = mkElem("div", { class: "context-menu" });
const remove = mkElem("span", { class: "remove" });
remove.innerText = "Remove";
contextMenu.appendChild(remove);

const changeValue = mkElem("span", { class: "change-value" });
changeValue.innerText = "Change Value";
contextMenu.appendChild(changeValue);

const insertAfter = mkElem("span", { class: "insert-after" });
insertAfter.innerText = "Insert after";
contextMenu.appendChild(insertAfter);

const insertBefore = mkElem("span", { class: "insert-before" });
insertBefore.innerText = "Insert before";
contextMenu.appendChild(insertBefore);
contextMenu.classList.add("active");
document.body.appendChild(contextMenu);
contextMenu.classList.add("hidden");

const input = mkElem("input", { class: "input", type: "text" });
input.classList.add("hidden");
document.body.appendChild(input);

container.appendChild(welcome);
container.appendChild(field);
container.appendChild(button);

const renderList = (containerId, list) => {
  const container = document.getElementById(containerId);
  for (const child of [...container.children]) {
    child.remove();
  }
  const listProperties = mkElem("ul", { class: "list-properties" });
  const tail = mkElem("li", { class: "tail" });
  tail.innerText = `List - tail: ${list.at(list.length - 1)}`;
  const head = mkElem("li", { class: "head" });
  head.innerText = `List - head: ${list.at(0)}`;
  const length = mkElem("li", { class: "length" });
  length.innerText = `List - length: ${list.length}`;
  listProperties.appendChild(head);
  listProperties.appendChild(tail);
  listProperties.appendChild(length);
  const linkedList = mkElem("ol", { class: "linked-list" });
  const lis = list.toArray();

  let currentLi;
  remove.addEventListener("click", () => {
    list.remove(currentLi.innerText);
    currentLi.remove();
    renderList(containerId, list);
  });

  let newValue;

  input.addEventListener("change", () => {
    newValue = input.value;
  });

  changeValue.addEventListener("click", (e) => {
    input.classList.remove("hidden");
    input.style.top = `${e.clientY - 20}px`;
    input.style.left = `${e.clientX - 20}px`;
    input.addEventListener("change", () => {
      input.classList.add("hidden");
      for (let i = 0; i < list.length; i++) {
        if (list.toArray()[i] === currentLi.innerText) {
          list.changeValueAt(i, newValue);
          renderList(containerId, list);
        }
      }
    });
  });

  insertAfter.addEventListener("click", (e) => {
    input.classList.remove("hidden");
    input.style.top = `${e.clientY - 20}px`;
    input.style.left = `${e.clientX - 20}px`;
    input.addEventListener("change", () => {
      input.classList.add("hidden");
      for (let i = 0; i < list.length; i++) {
        if (list.toArray()[i] === currentLi.innerText) {
          list.insert(i + 1, newValue);
          renderList(containerId, list);
          currentLi = "";
        }
      }
    });
  });

  lis.forEach((x) => {
    const li = mkElem("li", { class: "Node" });
    li.innerText = x;
    linkedList.appendChild(li);
    li.addEventListener("contextmenu", (e) => {
      currentLi = li;
      e.preventDefault();
      contextMenu.classList.remove("hidden");
      contextMenu.style.top = `${e.clientY - 20}px`;
      contextMenu.style.left = `${e.clientX - 20}px`;

      insertBefore.addEventListener("click", (e) => {
        input.classList.remove("hidden");
        input.style.top = `${e.clientY - 20}px`;
        input.style.left = `${e.clientX - 20}px`;
        for (let i = 0; i < list.length; i++) {
          if (list.at(i) === li.innerText) {
            input.addEventListener("change", () => {
              input.classList.add("hidden");
              list.insert(i - 1 || 0, input.value);
              renderList(containerId, list);
            });
          }
        }
      });

      document.addEventListener("click", () => {
        contextMenu.classList.add("hidden");
      });
    });
  });
  container.appendChild(linkedList);
  container.appendChild(listProperties);
};

const Append = (list) => {
  const field = mkElem("input", { type: "text", class: "appendValue" });
  const button = mkElem("button", { class: "append" });
  button.innerText = "Append";
  button.addEventListener("click", () => {
    list.append(field.value);
    field.value = "";
    renderList("linked-list", list);
  });
  return { button, field };
};

const Prepend = (list) => {
  const field = mkElem("input", { type: "text", class: "prependValue" });
  const button = mkElem("button", { class: "prepend" });
  button.innerText = "Prepend";
  button.addEventListener("click", () => {
    list.prepend(field.value);
    field.value = "";
    renderList("linked-list", list);
  });
  return { button, field };
};

const Reverse = (list) => {
  const button = mkElem("button", { class: "reverse" });
  button.innerText = "Reverse";
  button.addEventListener("click", () => {
    list.reverse();
    renderList("linked-list", list);
  });
  return { domElement: button };
};

const At = (list) => {
  const field = mkElem("input", { type: "text", class: "at" });
  const button = mkElem("button", { class: "at" });
  button.innerText = "At";
  button.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByClassName("Node").length; i++) {
      if (
        document
          .getElementsByClassName("Node")
          [i].classList.contains("highlighted")
      ) {
        document
          .getElementsByClassName("Node")
          [i].classList.remove("highlighted");
      }
      if (i === Number(field.value)) {
        document.getElementsByClassName("Node")[i].classList.add("highlighted");
      }
    }
  });
  return { button, field };
};

const RemoveAt = (list) => {
  const field = mkElem("input", { type: "text", class: "remove-at" });
  const button = mkElem("button", { class: "remove-at" });
  button.innerText = "Remove At";
  button.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByClassName("Node").length; i++) {
      if (i === Number(field.value)) {
        list.removeAt(i);
        renderList("linked-list", list);
      }
    }
  });
  return { button, field };
};

const InsertAt = (list) => {
  const fieldAt = mkElem("input", { type: "text", class: "insert-at" });
  const fieldValue = mkElem("input", { type: "text", class: "insert-value" });
  const button = mkElem("button", { class: "insert-at" });
  button.innerText = "Insert At - Value";
  button.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByClassName("Node").length; i++) {
      if (i === Number(fieldAt.value)) {
        list.insert(i, fieldValue.value);
        renderList("linked-list", list);
      }
    }
  });
  return { button, fieldAt, fieldValue };
};

const renderControls = (containerId, list) => {
  const container = document.getElementById(containerId);
  const append = Append(list);
  const prepend = Prepend(list);
  const reverse = Reverse(list);
  const at = At(list);
  const removeAt = RemoveAt(list);
  const insertAt = InsertAt(list);

  const appendContainer = mkElem("div", { class: "append-container" });
  appendContainer.appendChild(append.button);
  appendContainer.appendChild(append.field);
  const prependContainer = mkElem("div", { class: "prepend-container" });
  prependContainer.appendChild(prepend.button);
  prependContainer.appendChild(prepend.field);
  const atContainer = mkElem("div", { class: "at-container" });
  atContainer.appendChild(at.button);
  atContainer.appendChild(at.field);
  const removeAtContainer = mkElem("div", { class: "remove-at-container" });
  removeAtContainer.appendChild(removeAt.button);
  removeAtContainer.appendChild(removeAt.field);
  const insertAtContainer = mkElem("div", { class: "insert-at" });
  insertAtContainer.appendChild(insertAt.button);
  insertAtContainer.appendChild(insertAt.fieldAt);
  insertAtContainer.appendChild(insertAt.fieldValue);

  container.appendChild(appendContainer);
  container.appendChild(prependContainer);
  container.appendChild(reverse.domElement);
  container.appendChild(atContainer);
  container.appendChild(removeAtContainer);
  container.appendChild(insertAtContainer);
};
button.addEventListener("click", () => {
  arr = field.value.split(",");
  for (const child of [...container.children]) {
    child.remove();
  }
  const list = List.from(arr);
  renderList("linked-list", list);
  renderControls("controls", list);
});
