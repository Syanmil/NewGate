function smallestCommons(arr) {
  var max = Math.max(...arr)
  var min = Math.min(...arr)
  var maxer = max*max*max*max
  for (var i=min+1; i<max; i++){
    arr.push(i)
  }
  arr.sort(function(a,b){
    if(a>b){
      return 1
    } else if (a<b){
      return -1
    } else {
      return 0
    }
  })
  var boo = max
  while (true){
    var fuss = arr.every(function(elem, index, array){
      return boo%elem == 0;
    });
    if (fuss === false){
      boo += max;
    } else {
      return boo
    }
  }
}


console.log(smallestCommons([1, 5])) // 60.
console.log(smallestCommons([5, 1])) // 60.
console.log(smallestCommons([1, 13])) // 360360.
console.log(smallestCommons([23, 18])) // 6056820.
