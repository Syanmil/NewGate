function sumAll(arr) {
  for (var i = Math.min(...arr) +1; i < Math.max(...arr); i++){
    arr.push(i);
  }
  arr = arr.reduce(function(prev, curr){
    return prev + curr;
  });
  return arr;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
