# Array.map

Executes a function to every element of an array, and returns a new array with the results.

### Ex. 1 Multiply every number in array by 2:

```js
const nums = [1, 2, 3, 4, 5];
const numsTimesTwo = nums.map((n) => n * 2);
```

```js
const timesTwo = (n) => n * 2;
const nums = [1, 2, 3, 4, 6];
const numsTimesTwo = nums.map(timesTwo);
```

### Ex. 2 Parse a line of whitespace separated numbers:

```js
const nums = "1 2 4 34134 2 14";
const parsed = nums.split(" ").map(Number);
```
