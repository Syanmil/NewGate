function sumFibs (num) {
  var fib = [1, 1]
  while (num >= fib[fib.length - 1]) {
    fib.push((fib[ fib.length - 1 ]) + fib[ fib.length - 2 ])
  }
  fib.pop()
  return fib.filter(function (fibo) {
    return fibo % 2 !== 0
  }).reduce(function (curr, prev) {
    return curr + prev
  })
}

console.log(sumFibs(1000) === 1785)
console.log(sumFibs(4000000) === 4613732)
console.log(sumFibs(4) === 5)
console.log(sumFibs(75024) === 60696)
console.log(sumFibs(75025) === 135721)
