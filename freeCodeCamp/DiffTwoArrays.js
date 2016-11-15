
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) === ["pink wool"]);
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) === ["diorite", "pink woll"]);
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) === []);
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) === ["piglet", 4]);
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]) === [1, "calf", 3, "piglet", 7, "filly"]);
