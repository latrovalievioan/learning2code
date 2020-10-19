//Take an array of names and outputs them as a sorted html list

const names = [
    "Konsalsin", "Merto", "Maria", "Eli", "Ventci",
     "Ventsi", "Georgy", "Kiro", "Pesho", "Gosho"
].sort();

const list = `<ol>${names.map(name => '<li>' + name + '</li>')}</ol>`;
console.log(list.replace(/,/g,''));
