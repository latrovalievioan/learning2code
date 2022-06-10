const findMissingLetter = (arr) => {
  return arr.reduce((acc, current) => {
    return current.charCodeAt() - acc.prev.charCodeAt() > 1
      ? {missing: String.fromCharCode(current.charCodeAt() - 1), prev: current}
      : {prev: current, missing: acc.missing} 
  }, {missing: '', prev: arr[0]}).missing
}

const input = ['a', 'b', 'c', 'd', 'f']

console.log(findMissingLetter(input));
