function getFrame(w, h, ch) {
  if (w <= 2 || h <= 2) {
    return "invalid";
  } else {
    let frame = [];
    for (let i = 0; i < h; ++i) {
      frame[i] = [];
      let currentRow = frame[i];
      for (let j = 0; j < w; ++j) {
        if (i === 0 || i === h - 1) {
          currentRow[j] = ch;
        } else {
          currentRow[j] = " ";
          currentRow[0] = ch;
          currentRow[w - 1] = ch;
        }
      }
      frame[i] = [frame[i].join("")];
    }
    return frame;
  }
}

console.log(getFrame(3, 3, "0"));
