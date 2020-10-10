function direction(arr) {
    const result = arr.map(x => {
        return x.replace('e','w')
        .replace('E','W')
        .replace('a','e')
        .replace('A','E');
    });
    return result;
}
console.log(direction(["east", "EAST", "eastEAST"]))