
//write a function that accepts an array 
//of 2d points points and a number radius 
//and returns an array of the points from 
//the original array that are closer to 
//the center of the coordinate system than radius

//print the points from the previous task in the format Point(x, y)


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

const isInRadius = (points, r) => points.filter(p => p.x <= r && p.y <= r);
console.log(isInRadius(points,40));

