/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// I: matrix
// O: boolean
// C:
// E: not found, value at 0,0 or at one of the corners

// observation:
// bottom right is biggest, top left is smallest, use this to rule out some edge cases
// top left corner will always be the min for that sub matrix

// strategy: progress down the majordiagonal, each time, look at the end of that row or column, if the target could be between then, search, use recursion
// start at 0,0, look right, look down
  // if target is bigger than the extreme on the right, skip this row
  // if the target is bigger than the extreme at the bottom, skip this col

//pseudocode
// perform min max checks (top left corner is min, bottom right is max)
// init starting location at 0,0
// compare to rowMax
  // if target is less than rowMax, traverse row
    // if target found return target
    // if reached deadend,

// other strategy: search by rows, each row gives us a min and max for that row
var searchMatrix = function(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    let rowMin = matrix[row][0];
    let rowMax = matrix[row][matrix[row].length - 1];
    if (rowMin <= target && target <= rowMax) {
      for (let number of matrix[row]) {
        if (target === number) return true;
      }
    } else if (target > rowMax) {
      continue;
    } else if (target < rowMin) {
      break;
    }
  }
  return false;
};