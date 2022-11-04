/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// I: matrix of ints
// O: same matrix
// C: modify in place
// E: all are the same color already

// strategy: use recursion
// peek in the 4 directions, if it's the same as the original value, change its color, then recursion
// time O(M) size of matrix, each element is visited once
var floodFill = function(image, sr, sc, color) {
  let ogColor = image[sr][sc];
  if (ogColor === color) return image;
  const fill = (row, col) => {
    image[row][col] = color;
    // go up
    if (row > 0 && image[row - 1][col] === ogColor) fill(row - 1, col);
    // go down
    if (row < image.length - 1 && image[row + 1][col] === ogColor) fill(row + 1, col);
    // go left
    if (col > 0 && image[row][col - 1] === ogColor) fill(row, col - 1);
    // go right
    if (col < image[0].length - 1 && image[row][col + 1] === ogColor) fill(row, col + 1);
  }
  fill(sr, sc)
  return image;
};