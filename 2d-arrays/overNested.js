function deNest(arr) {
  return Array.isArray(arr) ? arr : deNest(arr[0]);
}

console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));
