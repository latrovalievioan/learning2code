//filtering empty strings or falsy values from an array

const arr =[1,NaN,2,undefined,3,null,'4','',5,Number('nine')]
console.log(arr.filter(n => n))