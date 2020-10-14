# Array.filter

Returns a new array with the elements that return true from the function passed.

## Ex1. Return the even nums

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.filter((n) => (n % 2 = 0)));
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

Just like .map, filter's function can take a secound argument - the index of the element.
