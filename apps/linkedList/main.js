const container = document.getElementById("initial-content");
const welcome = mkElem("h1", { class: "welcome-text" });
welcome.innerText = "Give me an input, so I can render a list!";
const field = mkElem("input", { type: "text", class: "initial-input" });
const button = mkElem("button", { class: "initial-button" });
button.innerText = "Render List";
let arr = [];

container.appendChild(welcome);
container.appendChild(field);
container.appendChild(button);

const renderList = (containerId, list) => {
  const container = document.getElementById(containerId);
  for (const child of [...container.children]) {
    child.remove();
  }
  const listProperties = mkElem("ul", { class: "list-preperties" });
  const tail = mkElem("li", { class: "tail" });
  tail.innerText = `List - tail: ${list.tail.value}`;
  const head = mkElem("li", { class: "head" });
  head.innerText = `List - head: ${list.root.value}`;
  const length = mkElem("li", { class: "length" });
  length.innerText = `List - length: ${list.length}`;
  listProperties.appendChild(head);
  listProperties.appendChild(tail);
  listProperties.appendChild(length);
  const linkedList = mkElem("ol", { class: "linked-list" });
  const lis = list.toArray();
  lis.forEach((x) => {
    const li = mkElem("li", { class: "Node" });
    li.innerText = x;
    linkedList.appendChild(li);
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const menu = mkElem("div", { class: "context-menu" });
      const menuElem = (elem) => {
        elem.innerText = "go6o";
        menu.appendChild(elem);
      };
      const elemen4e = mkElem("span", { class: "element4e" });

      menuElem(elemen4e);
      document.body.appendChild(menu);
    });
  });
  container.appendChild(linkedList);
  container.appendChild(listProperties);
};

const Append = () => {
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

const Prepend = () => {
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

const Reverse = () => {
  const button = mkElem("button", { class: "reverse" });
  button.innerText = "Reverse";
  button.addEventListener("click", () => {
    list.reverse();
    renderList("linked-list", list);
  });
  return { domElement: button };
};

const At = () => {
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

const RemoveAt = () => {
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

const InsertAt = () => {
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

const renderControls = (containerId) => {
  const container = document.getElementById(containerId);
  const append = Append();
  const prepend = Prepend();
  const reverse = Reverse();
  const at = At();
  const removeAt = RemoveAt();
  const insertAt = InsertAt();

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
  renderControls("controls");
});
