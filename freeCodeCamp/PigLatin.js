function translatePigLatin(str) {
  var vowel = ["a", "i", "u", "e", "o"];
  for (var i = 0; i < vowel.length; i++){
    if (str[0] == vowel[i]){
      return str += "way"
    }
  }
  for (var j = 0; j < str.length; j++){
    
  }
  return str;
}

console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california")) // "aliforniacay".
console.log(translatePigLatin("paragraphs")) // "aragraphspay".
console.log(translatePigLatin("glove")) // "oveglay".
console.log(translatePigLatin("algorithm")) // "algorithmway".
console.log(translatePigLatin("eight")) // "eightway".
