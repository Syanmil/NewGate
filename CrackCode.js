/*Rules:

1. Kode yang benar adalah kode yang mengandung huruf "C", "O", "D", dan "E" yang

ditampilkan secara berurutan yang mungkin dibatasi oleh huruf lain.

2. Apabila tidak terdapat huruf "C", "O", "D", dan "E" atau urutannya tidak sesuai,

maka kode tidak valid.

3. Apabila pola "C", "O", "D", dan "E" ditemukan, maka Sherlock dapat memecah kode

tersebut dan menemukan nama pelaku dengan cara memecah teks panjang ke beberapa kata,

dan dipisahkan berdasarkan "C", "O", "D", dan "E" yang pertama kali ditemukan.*/
var crack = ["C", "O", "D", "E"]
function analyzeDyingMessage(code){
  var result = [];
  var save = -1;
  for (var i = 0; i < code.length; i++){
    for (var j = 0; j < crack.length; j++){
      save += 1
      if (code.indexOf(crack[j]) == -1){
        return false
      }
      if (save > code.indexOf(crack[j])){
        return false
      }
    }
  }
  return true;
};

console.log(analyzeDyingMessage("CHARLESOXDONEULER")); // "Charles Ox Don Euler"
console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
console.log(analyzeDyingMessage("CODE")); // "C O D E"
console.log(analyzeDyingMessage("CODING")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"
