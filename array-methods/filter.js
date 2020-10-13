//const array = [1,2,3,4,5,6,7,8,9]
//even nums
// console.log(array.filter(n => n % 2 === 0))

// const string = "IOAN is A GOOd MusiCIAN"
// //return only capital letters
// console.log(string.split('').filter(x => x.charCodeAt(0) < 97 ).join(''))

// const points = [
//     { x: 5, y: 66 },
//     { x: 20, y: 71 },
//     { x: 44, y: 34 },
//     { x: 26, y: 59 },
//     { x: 2, y: 3 },
//     { x: 80, y: 92 },
//     { x: 27, y: 24 },
//     { x: 44, y: 21 },
//     { x: 89, y: 56 },
//     { x: 19, y: 2 }
// ];
// //x is bigger than 10 and add z that is === to 1000
// console.log(points.filter(p => {
//     if (p.x > 10){
//         return p.z = 1000
//     }
// }))

const arr = [1,2,3,'24',23,35,'123124124',33,'34',6,'66']
// console.log(arr.filter(n => typeof n === "number"))

console.log(arr.filter(x => typeof x === 'string'))