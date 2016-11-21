function fearNotLetter(str) {
  str = str.split("").map(function(val){
    return val.charCodeAt();
  });
  for (var i=0; i<str.length-1; i++){
    if (str[i+1] - str[i] != 1){
      return String.fromCharCode(str[i]+1)
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")) // "d".
console.log(fearNotLetter("abcdefghjklmno")) // "i".
console.log(fearNotLetter("bcd")) // undefined.
console.log(fearNotLetter("yz")) // undefined.
