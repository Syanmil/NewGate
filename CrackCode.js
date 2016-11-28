/*Rules:

1. Kode yang benar adalah kode yang mengandung huruf "C", "O", "D", dan "E" yang

ditampilkan secara berurutan yang mungkin dibatasi oleh huruf lain.

2. Apabila tidak terdapat huruf "C", "O", "D", dan "E" atau urutannya tidak sesuai,

maka kode tidak valid.

3. Apabila pola "C", "O", "D", dan "E" ditemukan, maka Sherlock dapat memecah kode

tersebut dan menemukan nama pelaku dengan cara memecah teks panjang ke beberapa kata,

dan dipisahkan berdasarkan "C", "O", "D", dan "E" yang pertama kali ditemukan.*/
function analyzeDyingMassage(code){
  return code
}
console.log(analyzeDyingMassage("CHARLESOXDONEULER"));
console.log(analyzeDyingMassage("CHAMICAELOTNIELDANELLAINE"));
console.log(analyzeDyingMassage("MARIAHCHARLIEOZIEDELEANOR"));
console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
console.log(analyzeDyingMessage("CODE")); // "C O D E"
console.log(analyzeDyingMessage("CODING")); // false
