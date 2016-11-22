function smallestCommons(arr) {
  var max = Math.max(...arr)
  var min = Math.min(...arr)
  for (var i=min+1; i<max; i++){
    arr.push(i)
  }
  return arr;
}


console.log(smallestCommons([1, 5])) // 60.
console.log(smallestCommons([5, 1])) // 60.
console.log(smallestCommons([1, 13])) // 360360.
console.log(smallestCommons([23, 18])) // 6056820.
