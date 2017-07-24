function sumPrimes (num) {
  var prime = [2, 3]
  var newPrime = prime[prime.length - 1]
  while (num >= newPrime) {
    var isPrime = true
    prime.forEach(number => {
      if (newPrime % number === 0) {
        isPrime = false
      }
    })
    if (isPrime) {
      prime.push(newPrime)
    }
    newPrime += 2
  }
  return prime.reduce((curr, prev) => {
    return curr + prev
  })
}

console.log(sumPrimes(10) === 17)
console.log(sumPrimes(977) === 73156)
