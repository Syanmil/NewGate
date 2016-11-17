function translatePigLatin(str) {
  var vowel = ["a", "i", "u", "e", "o"];
  for (var j = 0; j < str.length; j++){
    for (var i = 0; i < vowel.length; i++){
      if (str[0] == vowel[i]){
        return str += "way";
      } else if (str[j] == vowel[i]){
        var index = str.indexOf(str[j]);
        var front = str.substr(index);
        var end = str.substr(0, index);
        return front + end + "ay"
      }
    }
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california")) // "aliforniacay".
console.log(translatePigLatin("paragraphs")) // "aragraphspay".
console.log(translatePigLatin("glove")) // "oveglay".
console.log(translatePigLatin("algorithm")) // "algorithmway".
console.log(translatePigLatin("eight")) // "eightway".
