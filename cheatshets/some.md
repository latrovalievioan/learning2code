# Some() array method

### The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

## Ex. 1

Return true if at least one element in the array is even.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.some((n) => n % 2 === 0));
//Retruns true
```

## Ex. 2

Return true if at least one element in the array is bigger than 10.

```js
const arr = [1, 2, 3, 11, 4, 5];
console.log(arr.some((n) => n > 10));
//Returns true - 11 is bigger than 10
```

## Ex. 3

Returns true if a value is present in the array.

```js
const arr = ["apple", "banana", "mango"];
console.log(arr.some((fruit) => fruit === "mango"));
//Returns true - we have mango in the array
```
