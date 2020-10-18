//Take a 2d array of numbers and outputs them as an html table
const matrix = [
    [10,20,30,40],
    [11,22,33,44],
    [50,60,70,80],
    [55,66,77,88],
];

const list = `<table>${matrix.map(row => `<tr>${row.map(col => `<td>${col}</td>`)}</tr>`)}</table>`
console.log(list)