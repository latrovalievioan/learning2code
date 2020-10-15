//write a function that keeps only every 4th element from an array

const everyFourth =  (arr) => arr.filter((n,i) => i % 4 === 0)
console.log(everyFourth([1,2,3,4,5,6,7,8,9,10,11,12,123]))