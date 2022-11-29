/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let count = 0;
  let maxRow = grid.length - 1;
  let maxCol = grid[0].length - 1;
  const processIsland = (row, col) => {
    grid[row][col] = '0';
    // check up
    if (row > 0 && grid[row - 1][col] === '1') processIsland(row - 1, col);
    // check down
    if (row < maxRow && grid[row + 1][col] === '1') processIsland(row + 1, col);
    // check right
    if (col < maxCol && grid[row][col + 1] === '1') processIsland(row, col + 1);
    // check left
    if (col > 0 && grid[row][col - 1] === '1') processIsland(row, col - 1);
  }
  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      if (grid[row][col] === '1') {
        count++;
        processIsland(row, col);
      }
    }
  }

  return count;
};