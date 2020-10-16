# Object Property Access

## Known property access

<ul type="disk">
    <li>
    Dot property accessor:  object.property
    </li>
    <li>
    Square brackets property access: object['property']
    </li>
    <li>
    Object destructuring: const { property } = object
    </li>
</ul>

## Dynamically computed property access

The dynamically computed property can be accessed by accessing the object's property by using square brackets:

### EX:

```js
const key = "Name";
const obj = {};
obj[key] = "Kiro";
```

## Аcessing properties with awkward names

To access properties with awkaward names square bracket access is the best method:

### EX:

```js
const obj = { "zdra-veyte": 0 };
console.log(obj["zdra-veyte"]);
```

## Accessing properties of nested objects

### EX:

```js
const obj = {
  Animal: { Name: "dog", Eyes: 2, Head: 1, Paws: 4, "Cute-face": 1 },
};
console.log(obj.Animal["Cute-face"]);
```
