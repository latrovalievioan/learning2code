# Array.filter

Returns a new array with the elements that return true from the function passed.

## Ex1. Return the even nums

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.filter((n) => n % 2 === 0));
```

## Ex2. Return only capital letters

```js
const string = 'IoAN Is LeArNING TO cODE'
console.log(string.split('').filter(l => l.charCodeAt(0) < 97)
```

## Ex3. Return only the numbers

```js
const arr = [1, 2, 3, 4, "5", 6, "7", 8, "9", "10", 11];
console.log(arr.filter((n) => typeof n === "number"));
```

## Ex.4 Return only thruthy values

```js
const arr = [1, NaN, 2, undefined, 3, null, "4", "", 5, Number("nine")];
console.log(arr.filter((n) => n));
```

## Ex.5 Return only persons with length of name being > than 5

```js
const people = [
  {
    name: "Ioan",
    surname: "Latrovaliev",
  },
  {
    name: "Konstantin",
    surname: "Simeonov",
  },
  {
    name: "Georgy",
    surname: "Tomov",
  },
  {
    name: "Bella",
    surname: "Zaharieva",
  },
  {
    name: "Martin",
    surname: "Georgiev",
  },
  {
    name: "Maria",
    surname: "Madzharova",
  },
  {
    name: "Ventcislava",
    surname: "Nekova",
  },
  {
    name: "Ventsisalva",
    surname: "Stamenova",
  },
];
console.log(people.filter((p) => p.name.length > 5));
```

### Just like .map, filter's function can take a secound argument - the index of the element:

## Ex. 1 Return every third element of an array

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.filter((n, i) => i % 3 === 0));
```

## Ex. 2 Drop every fourth element of an array

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.filter((n, i) => i % 4 !== 0));
```
