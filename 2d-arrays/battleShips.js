function fire(matrix, coordinates) {
  let columnIndex = coordinates.slice(1) - 1;
  let rowIndex = coordinates.toLowerCase().charCodeAt(0) - 97;

  return matrix[rowIndex][columnIndex] === "." ? "splash" : "BOOM";
}

console.log(
  fire(
    [
      [".", ".", ".", "*", "*"],
      [".", "*", ".", ".", "."],
      [".", "*", ".", ".", "."],
      [".", "*", ".", ".", "."],
      [".", ".", "*", "*", "."],
    ],
    "C2"
  )
);
