
// You should implement your task here.

module.exports = function towelSort (array) {
  if (!array) return [];
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if ((i-1) % 2 == 0) {
      for (j = array[i].length-1; j >= 0; j--) {
         newArr.push(array[i][j]);
      }       
    } else {
      for (k = 0; k < array[i].length; k++) {
     newArr.push(array[i][k]);
             }
           }    
  }
  return newArr;
}
