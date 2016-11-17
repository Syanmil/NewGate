function myReplace(str, before, after) {
  if (before.charCodeAt(0) < 92){
    after = after.split("");
    after.splice(0, 1, after[0].toUpperCase());
    after = after.join("");
  }
  str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); //"His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms".
