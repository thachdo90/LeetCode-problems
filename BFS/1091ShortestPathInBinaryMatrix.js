/**
 * @param {number[][]} grid
 * @return {number}
 */
// I: matrix
// O: number (shorted path length)
// C:
// E: no solution -> -1
// strategy: BFS, use stack to track the paths (image bacteria spreading outwards)
// when we process a cell in the stack, check its 8 directions, if any is a 0, push it to the stack to process
var shortestPathBinaryMatrix = function(grid) {
  let steps = 0;
  let stack = [[0,0]];
  let maxIndex = grid.length -1;
  if (grid[0][0] === 1 || grid[maxIndex][maxIndex] === 1) return -1;
  while (stack.length > 0) {
    let nextStack = [];
    steps++;
    for (let cell of stack) {
      let row = Number(cell[0]);
      let col = Number(cell[1]);
      if (grid[row][col] === 1) continue;
      if (row === maxIndex && col === maxIndex && grid[row][col] === 0) {
        return steps;
      }
      grid[row][col] = 1; // indicates a visited cell
      if (row > 0 && grid[row - 1][col] === 0) nextStack.push([row - 1, col]);
      if (row < maxIndex && grid[row + 1][col] === 0) nextStack.push([row + 1, col]);
      if (col > 0 && grid[row][col - 1] === 0) nextStack.push([row, col - 1]);
      if (col < maxIndex && grid[row][col + 1] === 0) nextStack.push([row, col + 1]);
      if (row > 0 && col > 0 && grid[row - 1][col - 1] === 0) nextStack.push([row - 1, col - 1]);
      if (row < maxIndex && col < maxIndex && grid[row + 1][col + 1] === 0) nextStack.push([row + 1, col + 1]);
      if (row > 0 && col < maxIndex && grid[row - 1][col + 1] === 0) nextStack.push([row - 1, col + 1]);
      if (row < maxIndex && col > 0 && grid[row + 1][col - 1] === 0) nextStack.push([row + 1, col - 1]);
    }
    stack = nextStack;
  }
  return -1;
};