const array = [1,2,3,4,5,6,7,8,9]
//console.log(array.map(x => x * 2))

const string = 'Ioni bonanza e super qk!';
//console.log(string.split(' ').map(x=> x.length));

// console.log(
//     string
//         .split('')
//         .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//         .join('')
// );

const points = [
    { x: 5, y: 66 },
    { x: 20, y: 71 },
    { x: 44, y: 34 },
    { x: 26, y: 59 },
    { x: 2, y: 3 },
    { x: 80, y: 92 },
    { x: 27, y: 24 },
    { x: 44, y: 21 },
    { x: 89, y: 56 },
    { x: 19, y: 2 }
];

// console.log(points.map(p => p.x));
// console.log(points.map(p => p.y));
// console.log(points.map(p => Math.sqrt(p.x ** 2 + p.y ** 2)));
// const to3d = p => ({x: p.x, y: p.y, z: 0})
// console.log((points.map(to3d)));

// console.log(points.map(p => `Point(${p.x},${p.y})`).map(string => {
//     const regex = /[0-9]+/g;
//     const xy = string.match(regex).map(Number);
//     return {x: xy[0], y: xy[1]};
// }
//       ));
//const vhod = '1 2 3 4 5 2 1 5 -2 -233 124124123123 5 NaN';
//console.log(vhod.split(' ').map(Number));

// const encode = str => str.split('').map(c => {
//     if(c === ' '){
//         return c;
//     }
//     return /[a-z]/i.test(c) ? 'x' : '*';
// }).join('');
// console.log(encode('go6o e malak, sladur!'))
// console.log(
//     [
//         "Create a function that takes an object and returns the keys and values as separate arrays.",
//         "Return the keys sorted alphabetically, and their corresponding values in the same order.",
//         "Remember to sort the keys."
//     ].map(encode)
// );

// const str = 'Ioni ne moje da pushi cigari!'
// console.log(str.split(' ').map((w, i) => [w, i]))

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = ['a','b','c','d','e','f']

//console.log(arr1.map((n, i) => [n, arr2[i]]));
//console.log(arr2.map((n, i) => [n, arr1[i]]));

console.log(arr1.map((n, i) => {
    return i % 2 === 0 ? n * 2 : n / 2
}));

