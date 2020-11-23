const HighlightList = (arr) => {
  const list = document.createElement("ul");
  list.setAttribute("class", "hlist");
  const listItems = arr.map((n) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.innerHTML = n;
    list.appendChild(li);
    return li;
  });
  const highlightItems = (indexes) => {
    listItems.forEach((li, i) => {
      li.classList.toggle("highlighted", indexes.includes(i));
    });
  };
  const setMinIndex = (index) => {
    listItems[index].classList.add("min-index");
  };
  const removeMinIndex = (index) => {
    listItems[index].classList.remove("min-index");
  };
  //   let lastMinIndex = 0;
  // const setMinIndex = (index) => {
  //     listItems[lastMinIndex].classList.remove("min-index");
  //     listItems[index].classList.add("min-index");
  //     lastMinIndex = index;
  //   };
  const swapItems = (x, y) => {
    const temp = listItems[x].innerHTML;
    listItems[x].innerHTML = listItems[y].innerHTML;
    listItems[y].innerHTML = temp;
  };

  return {
    domElement: list,
    highlightItems,
    swapItems,
    setMinIndex,
    removeMinIndex,
  };
};
