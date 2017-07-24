
function pairElement(str) {
  var pair1 = ["A", "T", "G", "C"];
  var pair2 = ["T", "A", "C", "G"];
  var result = []
  for (var k = 0; k < str.length; k++) {
    result.push([str[k]])
  }
  for (var i=0; i < str.length; i++){
    for (var d = 0; d < pair1.length; d++) {
      if(str[i] == pair1[d]){
        result[i].push(pair2[d])
      }
    }
  }
  return result;
}

//pairElement("GCG");

console.log(pairElement("ATCGA")); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
