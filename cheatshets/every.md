# Every() array method

### The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

## Ex. 1

Returns true if all values in the array are below 30

```js
const arr = [1, 29, 24, 23, 15, 11];
console.log(arr.every(n => n < 30);
//returns true
```

## Ex. 2

Returns true if all strings in the array are valid passwords

```js
const validPassword = /^[A-Z](.){6,12}/;
const words = ["Ionib0nb0ni", "Goshopesho", "Peshogosho"];
console.log(words.every((word) => validPassword.test(word)));
//Returns true - every word starts with a capital letter and has between 7 and 13 chars.
```

## Ex. 3

Returns true if every element of an array is a number

```js
const els = [1, 2, 3, 4, 5, NaN, 124125115125, 2];
console.log(els.every((el) => typeof el === "number"));
// Returns true - every element is a number
```

### Using .every() method on a empty array would return true because 0 elements pass the test implemented in the function, <br> and since we have 0 elements, that means that every element passes the test.
