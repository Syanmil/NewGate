function chessboard(){
  var papan = [];
  var bidak = ['benteng', 'kuda', 'gajah', 'ratu', 'raja', 'gajah', 'kuda', 'benteng'];
  for (var i = 0; i < 8; i++){
    papan.push([]);
    for (var j = 0; j < 8; j++){
      papan[i].push("");
    };
  };
  for (var k = 0; k < 8; k++) {
    for (var l = 0; l < 8; l++) {
      if (k == 1 || k == 6){
        papan[k][l] = 'pion';
      } else if (k == 0 || k == 7){
        papan[k][l] = bidak[l];
      };
      if (k < 2){
        papan[k][l] += ' putih';
      } else if (k > 5){
        papan[k][l] += ' hitam';
      };
    };
  };
  return papan
}
console.log(chessboard());
