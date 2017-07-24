var angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]

function convertToRoman(num) {
  var hasil = []
  for (var i = angka.length; i > -1 ; i--){
    if (num >= angka[i]){
      hasil.push(roman[i]);
      num -= angka[i];
      i += 1
    }
  }
 return hasil.join("")
}

console.log(convertToRoman(36));

console.log(convertToRoman(3999))
console.log(convertToRoman(3999) === "MMMCMXCIX");
