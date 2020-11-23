const selectionSortVisualise = (containerId, arr) => {
  const arrCopy = arr.slice();
  const container = document.getElementById(containerId);
  const frag = document.createDocumentFragment();
  const funcDiv = document.createElement("div");
  const log = Log();
  let i = 0;
  let j = i + 1;
  let minIndex;
  const highlightList = HighlightList(arr);
  minIndex = i;
  const clickHandle = () => {
    arr.forEach((x, i) => {
      highlightList.removeMinIndex(i);
    });
    highlightList.setMinIndex(minIndex);
    if (j === arr.length) {
      // swap in arrCopy
      [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]];
      // swap in UI
      highlightList.swapItems(i, minIndex);
      i++;
      j = i + 1;
      minIndex = i;
    }
    log.newLine(`Checking if ${arrCopy[j]} < ${arrCopy[minIndex]}`);
    sortButton.setText("Next");
    let itemsToHighlight = [j];
    for (let x = 0; x <= i; x++) {
      itemsToHighlight.push(x);
    }
    highlightList.highlightItems(itemsToHighlight);
    if (arrCopy[minIndex] > arrCopy[j]) {
      minIndex = j;
      j++;
    } else if (arrCopy[minIndex] < arrCopy[j]) {
      j++;
    }
    log.newLine(`Min Num = ${arrCopy[minIndex]}`);
  };
  const sortButton = SortButton(clickHandle);
  funcDiv.appendChild(highlightList.domElement);
  funcDiv.appendChild(sortButton.domElement);
  funcDiv.setAttribute("class", "funcDiv");
  frag.appendChild(log.domElement);
  frag.appendChild(funcDiv);
  container.appendChild(frag);
};

selectionSortVisualise("selection-sort", [
  5,
  33,
  2,
  6,
  1,
  7,
  8,
  10,
  9,
  24,
  22,
  11,
]);
