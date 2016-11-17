
function diffArray(arr1, arr2) {
  var newArr = [];
  if (arr1.length < arr2.length){
    var dikit = arr1;
    var banyak = arr2;
    arr2 = dikit;
    arr1 = banyak;
  }
  for (var i = 0; i < arr1.length; i++){
    var pow = arr1.indexOf(arr2[i]);
    // console.log(pow);
    console.log(arr2[i]);
    if (pow != -1){
      arr1.splice(pow, 1);
      arr2.splice(pow, 1);
      i--
    }
  }
  return arr1.concat(arr2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === [4]);
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) === ["pink wool"]);
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) === ["diorite", "pink woll"]);
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) === []);
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) === ["piglet", 4]);
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]) === [1, "calf", 3, "piglet", 7, "filly"]);
