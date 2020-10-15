// write a function that splits an array of number in two arrays: 
//one with even and one with odd numbers

const evensOdds = (arr) => [
    arr.filter(n => n % 2 !== 0), arr.filter(n => n % 2 === 0)
];
console.log(evensOdds([1,2,3,4,5,6,7,7,8,9,10]));