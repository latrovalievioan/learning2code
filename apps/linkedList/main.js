const list = List.of(1, 2, 3, 4, 5, 6);

const renderList = (containerId, list) => {
  const container = document.getElementById(containerId);
  for (const child of [...container.children]) {
    child.remove();
  }
  const listProperties = mkElem("ul", { class: "list-preperties" });
  const tail = mkElem("li", { class: "tail" });
  tail.innerText = list.tail.value;
  const head = mkElem("li", { class: "head" });
  head.innerText = list.root.value;
  const length = mkElem("li", { class: "length" });
  length.innerText = list.length;
  listProperties.appendChild(head);
  listProperties.appendChild(tail);
  listProperties.appendChild(length);
  const linkedList = mkElem("ol", { class: "linked-list" });
  const lis = list.toArray();
  lis.forEach((x) => {
    const li = mkElem("li", { class: "Node" });
    li.innerText = x;
    linkedList.appendChild(li);
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
    console.log(field.value);
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
      if (i === Number(field.value)) {
        document.getElementsByClassName("Node")[i].classList.add("highlighted");
      }
    }
  });
  return { button, field };
};

const renderControls = (containerId) => {
  const container = document.getElementById(containerId);
  const append = Append();
  const prepend = Prepend();
  const reverse = Reverse();
  const at = At();
  const appendContainer = mkElem("div", { class: "append-container" });
  appendContainer.appendChild(append.button);
  appendContainer.appendChild(append.field);
  const prependContainer = mkElem("div", { class: "prepend-container" });
  prependContainer.appendChild(prepend.button);
  prependContainer.appendChild(prepend.field);
  const atContainer = mkElem("div", { class: "at-container" });
  container.appendChild(appendContainer);
  container.appendChild(prependContainer);
  container.appendChild(reverse.domElement);
  atContainer.appendChild(at.button);
  atContainer.appendChild(at.field);
  container.appendChild(atContainer);
};

renderList("linked-list", list);
renderControls("controls");
