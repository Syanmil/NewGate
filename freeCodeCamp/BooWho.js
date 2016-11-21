function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false){
    return true
  } else {
    return false
  }
}

console.log(booWho(true)) // true.
console.log(booWho(false)) // true.
console.log(booWho([1, 2, 3])) // false.
console.log(booWho([].slice)) // false.
console.log(booWho({ "a": 1 })) // false.
console.log(booWho(1)) // false.
console.log(booWho(NaN)) // false.
console.log(booWho("a")) // false.
console.log(booWho("true")) // false.
console.log(booWho("false")) // false.
