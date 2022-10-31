/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// I: matrix (array of arrays)
// O: same matrix
// C: in place, cannot generate new array
// E: matrix of size 1


// Strategy:
// iterate through the "anchor" elements, anchor is defined as the element in a set of 4 elements that can be swapped to perform a rotation

// Time Complexity: O(n^2), size of array, each element is visited once, O(1) space
var rotate = function(matrix) {
  let m = matrix[0].length - 1; //m represents max index
    for (let row = 0; row <= Math.floor(matrix.length / 2); row++) {
        for (let col = row; col < m - row; col++) {
            // swap the 4 elements in a counterclockwise path to get a clockwise final result
            [matrix[row][col], matrix[m - col][row]] = [matrix[m - col][row], matrix[row][col]];
            [matrix[m - col][row], matrix[m - row][m - col]] = [matrix[m - row][m - col], matrix[m - col][row]];
            [matrix[m - row][m - col], matrix[col][m - row]] = [matrix[col][m - row], matrix[m - row][m - col]];
        }
    }
};