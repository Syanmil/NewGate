function findElement (arr, func) {
  var found = arr.filter(func)
  return found.length > 0 ? found[0] : undefined
}

console.log(findElement([1, 2, 3, 4], function (num) { return num % 2 === 0 }))
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0 }))
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0 }))
