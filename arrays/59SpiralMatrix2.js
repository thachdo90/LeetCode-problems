/**
 * @param {number} n
 * @return {number[][]}
 */
// I: int, representing size of matrix
// O: matrix
// C:
// E: n = 1

// strategy: iterate up to n and inject those values into an emptry matrix, if that part of the matrix doesn't exist, we'll just declare it
// generate the first row as an isolated case
// init number of steps as n - 1;
// go down then left by the same number of steps
// decrement the step count by 1
// if step count === 0; stop
// go left then up by the same number of steps
// decrement the step count by 1
// if step count === 0; stop

// time: O(M) M = size of matrix
var generateMatrix = function(n) {
  if (n === 1) return [[1]];
  let steps = n;
  let value = 1;
  let matrix = [[1]];
  let row = 0;
  let col = 0;
  // initial row
  for (j = 0; j < steps - 1; j++) {
    col++;
    value++;
    matrix[row][col] = value;
  }
  while (steps > 0) {
    // move down
    for (let i = 1; i < steps; i++) {
      row++;
      value++;
      if (!matrix[row]) matrix[row] = [];
      matrix[row][col] = value;
    }
    // move left
    for (let i = 1; i < steps; i++) {
      col--;
      value++;
      matrix[row][col] = value;
    }
    steps--;
    if (steps === 1) break;
    // move up;
    for (let i = 1; i < steps; i++) {
      row--;
      value++;
      matrix[row][col] = value;
    }
    // move right
    for (let i = 1; i < steps; i++) {
      col++;
      value++;
      matrix[row][col] = value;
    }
    steps--;
  }
  return matrix;
};