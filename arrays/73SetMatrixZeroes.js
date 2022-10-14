//  iterate through array once, store the colIndex and rowIndex in two sets, respectively
// zeroRows = (1, 2, 5) a set of the row index that should be zero
// zeroCols = same
// iterate through array for the second time, checking if the index exists in either sets
// time O(2m*n) = O(m*n), space O(m + n)
var setZeroes = function(matrix) {
  let zeroRows = new Set()
  let zeroCols = new Set();
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === 0) {
              zeroRows.add(row);
              zeroCols.add(col);
          }
      }
  }
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (zeroRows.has(row) || zeroCols.has(col)) {
              matrix[row][col] = 0;
          }
      }
  }
  return matrix;
};