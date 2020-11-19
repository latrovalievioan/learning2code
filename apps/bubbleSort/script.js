const bubbleSortVisualise = (containerId, arr) => {
  const container = document.getElementById(containerId);
  container.classList.add("container");
  const frag = document.createDocumentFragment();
  const div = document.createElement("div");
  div.setAttribute("class", "Array");
  const button = document.createElement("button");
  button.setAttribute("class", "step");
  button.innerHTML = "Start";
  const ul = document.createElement("ul");
  const lis = arr.map((x) => {
    const li = document.createElement("li");
    li.innerHTML = x;
    ul.appendChild(li);
    return li;
  });
  const bigDiv = document.createElement("div");
  bigDiv.setAttribute("class", "bigDiv");
  const divLog = document.createElement("div");
  divLog.setAttribute("class", "log");

  div.appendChild(ul);
  bigDiv.appendChild(div);
  bigDiv.appendChild(button);
  frag.appendChild(divLog);
  frag.appendChild(bigDiv);

  container.appendChild(frag);
  //////////////////////////////////
  //////////////////////////////////
  //////////////////////////////////
  //////////////////////////////////
  let swapCounter = 0;
  const swap = (arr, x, y, temp = lis[x].innerHTML) => {
    divLog.innerHTML += `Swapped ${lis[x].innerHTML} with ${lis[y].innerHTML}! <br>`;
    arr[x].innerHTML = arr[y].innerHTML;
    arr[y].innerHTML = temp;
    swapCounter += 1;
  };
  let i = 0;
  let checked = false;

  const toCheck = () => {
    divLog.innerHTML += `Comparing ${lis[i].innerHTML} with ${
      lis[i + 1].innerHTML
    }... <br>`;
    lis[i].classList = "toCheck";
    if (lis[i + 1] !== undefined) {
      lis[i + 1].classList = "toCheck";
    }
    checked = true;
    if (lis[i - 1] !== undefined) {
      lis[i - 1].classList = "";
    }
  };
  const clickhandle = () => {
    if (button.innerText === "Reset") {
      location.reload();
    }
    button.innerText = "Next";
    if (i === lis.length - 1) {
      if (swapCounter === 0) {
        lis.forEach((li) => (li.classList = "toCheck"));
        button.innerText = "Reset";
        divLog.innerText += "Array is Sorted!";
        checked = true;
      } else {
        lis[lis.length - 1].classList = "";
        lis[lis.length - 2].classList = "";
        i = 0;
        swapCounter = 0;
      }
    }
    if (!checked) {
      toCheck();
    } else if (Number(lis[i].innerHTML) > Number(lis[i + 1].innerHTML)) {
      swap(lis, i, i + 1);
      checked = false;
      i += 1;
    } else {
      divLog.innerHTML += "No need for swap! <br>";
      checked = false;
      i += 1;
    }
  };
  button.addEventListener("click", clickhandle);
};

bubbleSortVisualise("bubble-sort", [5, 1, 2, 6, 3, 4, 7, 9, 8, 10]);
