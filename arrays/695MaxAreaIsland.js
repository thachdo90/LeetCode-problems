/**
 * @param {number[][]} grid
 * @return {number}
 */
// I: matrix of 0's and 1's
// O: number representing max area of an island
// C: islands are not connected diagonally
// E: no islands, islands with same area, the whole thing is one giant island

// strategy: recursion, time O(2M) = O(M) size of matrix, worst case is every cell is visited twice
// iterate through the matrix, every time we hit an island, measure its size and changing that island to a 0 (to avoid infinite loops and recounts), update max area
// pseudocode:
// init maxArea
// helper function(cell)
  // init count at 1 (for the current cell)
  // flip cell to 0
  // search left and add to count
  // search right and add to count
  // search up and add to count
  // search down and add to count
// iterate through rows
  // iterate through cols
    // if cell is a 1, trigger helper function to get the count
    // update maxArea
//return maxArea
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  const measureArea = (row, col) => {
    let count = 1;
    grid[row][col] = 0;
    // search up
    if (row > 0 && grid[row - 1][col] === 1) count += measureArea(row - 1, col);
    // search down
    if (row < grid.length - 1 && grid[row + 1][col] === 1) count += measureArea(row + 1, col);
    // search left
    if (col > 0 && grid[row][col - 1] === 1) count += measureArea(row, col - 1);
    // search right
    if (col < grid[0].length - 1 && grid[row][col + 1] === 1) count += measureArea(row, col + 1);
    return count;
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        let count = measureArea(row, col);
        maxArea = Math.max(maxArea, count);
      }
    }
  }

  return maxArea
};