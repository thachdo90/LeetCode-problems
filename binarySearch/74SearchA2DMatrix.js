/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// I: matrix
// O: Boolean
// C:
// E: elements at the start or end of a row or at the corners of the matrix

// Strategy:
// Binary search to find the row
// then binary search within that row
var searchMatrix = function(matrix, target) {
  let LB = 0;
  let UB = matrix.length - 1;
  let row;
  if (target < matrix[0][0]) return false;
  const midpoint = (LB, UB) => Math.floor((LB + UB) / 2);
  let MP = midpoint(LB, UB);
  while (MP !== LB) {
    if (matrix[MP][0] > target) {
      UB = MP;
    } else {
      LB = MP;
    }
    MP = midpoint(LB, UB);
  }
  if (target >= matrix[UB][0]) {
    row = matrix[UB];
  } else {
    row = matrix[LB];
  }
  LB = 0;
  UB = row.length - 1;
  MP = midpoint(LB, UB);
  if (row[LB] === target || row[UB] === target) return true;
  while (MP !== LB) {
    if (row[MP] > target) {
      UB = MP;
    } else {
      LB = MP;
    }
    MP = midpoint(LB, UB);
  }
  return row[LB] === target;
};