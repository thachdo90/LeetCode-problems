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
        if (number > target) break;
      }
    } else if (target > rowMax) {
      continue;
    } else if (target < rowMin) {
      break;
    }
  }
  return false;
};

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

// strategy: iterate through each row and binary search each row
var searchMatrix = function(matrix, target) {
  const binarySearchRow = (row) => {
    let LB = 0;
    let UB = matrix[row].length - 1;
    if (matrix[row][LB] === target || matrix[row][UB] === target) return true;
    while (LB < UB - 1) {
      let midIndex = Math.floor((LB + UB) / 2);
      let midValue = matrix[row][midIndex];
      if (midValue < target) {
        LB = midIndex;
      } else if (midValue > target) {
        UB = midIndex;
      } else {
        return true;
      }
    }
    return false;
  }

  for (let row = 0; row < matrix.length; row++) {
    let rowMin = matrix[row][0];
    let rowMax = matrix[row][matrix[row].length - 1];
    if (rowMin <= target && target <= rowMax) {
      if (binarySearchRow(row)) return true;
    } else if (target > rowMax) {
      continue;
    } else if (target < rowMin) {
      break;
    }
  }
  return false;
};

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

// strategy: iterate through each row
// optimization: binary search each row
// optimization: divide and conquer, use the the major diagonal to find the two sub matrices that could contain the target
var searchMatrix = function(matrix, target) {
  if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;

  const binarySearchRow = (row, c1, c2) => {
    let LB = c1;
    let UB = c2;
    if (matrix[row][LB] === target || matrix[row][UB] === target) return true;
    while (LB < UB - 1) {
      let midIndex = Math.floor((LB + UB) / 2);
      let midValue = matrix[row][midIndex];
      if (midValue < target) {
        LB = midIndex;
      } else if (midValue > target) {
        UB = midIndex;
      } else {
        return true;
      }
    }
    return false;
  }

  const searchSubMatrix = (r1, c1, r2, c2) => {
    for (let row = r1; row <= r2; row++) {
      let rowMin = matrix[row][c1];
      let rowMax = matrix[row][c2];
      if (rowMin <= target && target <= rowMax) {
        if (binarySearchRow(row, c1, c2)) return true;
      } else if (target > rowMax) {
        continue;
      } else if (target < rowMin) {
        break;
      }
    }
    return false;
  }

  let row = 0;
  let col = 0;
  while (matrix[row][col] <= target) {
    if (matrix[row][col] === target) return true;
    if (row === matrix.length - 1) return searchSubMatrix(0, col + 1, row, matrix[row].length - 1);
    if (col === matrix[0].length - 1) return searchSubMatrix(row + 1, 0, matrix.length - 1, col);
    if (matrix[row + 1][col + 1] > target) return searchSubMatrix(0, col + 1, row, matrix[row].length - 1) || searchSubMatrix(row + 1, 0, matrix.length - 1, col);
    row++;
    col++;
  }

};

var searchMatrix = function(matrix, target) {
  if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;

  const binarySearchRow = (row, c1, c2) => {
    let LB = c1;
    let UB = c2;
    if (matrix[row][LB] === target || matrix[row][UB] === target) return true;
    while (LB < UB - 1) {
      let midIndex = Math.floor((LB + UB) / 2);
      let midValue = matrix[row][midIndex];
      if (midValue < target) {
        LB = midIndex;
      } else if (midValue > target) {
        UB = midIndex;
      } else {
        return true;
      }
    }
    return false;
  }

  const searchSubMatrix = (r1, c1, r2, c2) => {
    for (let row = r1; row <= r2; row++) {
      let rowMin = matrix[row][c1];
      let rowMax = matrix[row][c2];
      if (rowMin <= target && target <= rowMax) {
        if (binarySearchRow(row, c1, c2)) return true;
      } else if (target > rowMax) {
        continue;
      } else if (target < rowMin) {
        break;
      }
    }
    return false;
  }

  let row = 0;
  let col = 0;
  while (matrix[row][col] <= target) {
    if (matrix[row][col] === target) return true;
    if (row === matrix.length - 1 || col === matrix[0].length - 1 || matrix[row + 1][col + 1] > target) {
      return searchSubMatrix(0, col + 1, row, matrix[row].length - 1) || searchSubMatrix(row + 1, 0, matrix.length - 1, col);
    }
    row++;
    col++;
  }
};