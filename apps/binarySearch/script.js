const binary_search_viz = (container_id, xs) => {
  const container = document.getElementById(container_id);

  const frag = document.createDocumentFragment();
  const div1 = document.createElement("div");
  div1.setAttribute("id", "Array");

  const div2 = document.createElement("div");
  div2.setAttribute("id", "interractive");

  const input = document.createElement("input");
  input.setAttribute("id", "input");

  const button = document.createElement("button");
  button.setAttribute("id", "start");
  button.setAttribute("disabled", "true");
  button.innerHTML = "Start";

  const ol = document.createElement("ol");
  const lis = xs.map((x) => {
    const li = document.createElement("li");
    li.innerHTML = x;
    ol.appendChild(li);
    return li;
  });

  div1.appendChild(ol);

  div2.appendChild(input);
  div2.appendChild(button);

  frag.appendChild(div1);
  frag.appendChild(div2);
  container.appendChild(frag);
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  let num;
  let rightIndex = xs.length;
  let leftIndex = 0;

  const binSearchStep = () => {
    const middleIndex = Math.floor((rightIndex - leftIndex) / 2 + leftIndex);

    lis.forEach((li, i) => {
      if (i === middleIndex) {
        if (xs[middleIndex] === num) {
          li.classList = "found";
        } else {
          li.classList = `middle`;
        }
      } else if (i === leftIndex) {
        li.classList = "left";
      } else if (
        i === rightIndex ||
        (i === rightIndex - 1 && rightIndex === xs.length)
      ) {
        li.classList = "right";
      } else {
        li.classList = "default";
      }
    });
    if (xs[middleIndex] === num) {
    } else if (xs[middleIndex] > num) {
      rightIndex = middleIndex;
    } else if (xs[middleIndex] < num) {
      leftIndex = middleIndex;
    }
  };

  const clickHandle = () => {
    button.innerText = "Next";
    num = Number(input.value);
    binSearchStep();
  };
  input.addEventListener("keyup", (event) => {
    if (input.value === "") {
      button.setAttribute("disabled", "true");
    } else if (num !== Number(input.value)) {
      num = Number(input.value);
      rightIndex = xs.length;
      leftIndex = 0;
      button.innerText = "Start";
      button.removeAttribute("disabled");
    }
  });

  button.addEventListener("click", clickHandle);
};

binary_search_viz("bin-search-1", [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]);
