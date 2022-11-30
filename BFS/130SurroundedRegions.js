/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//  strategy: get all the border tiles and use BFS to find all connected tiles, then flip every other one
var solve = function(board) {
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;
  let regions = [];
  const getNeighbors = (row, col) => {
    let neighbors = [];
    if (row > 0) neighbors.push([row - 1, col]);
    if (row < maxRow) neighbors.push([row + 1, col]);
    if (col > 0) neighbors.push([row, col - 1]);
    if (col < maxCol) neighbors.push([row, col + 1]);
    return neighbors;
  }
  const recordAndFlip = (row, col) => {
    board[row][col] = 'X';
    regions.push([row, col]);
    let neighbors = getNeighbors(row, col);
    neighbors.forEach(cell => {
      let r = cell[0];
      let c = cell[1];
      if (board[r][c] === 'O') recordAndFlip(r, c);
    })
  }

  // check edges, record any attached regions with BFS, flip them to X's
  for (let col = 0; col < board[0].length; col++) {
    if (board[0][col] === 'O') recordAndFlip(0, col);
    if (board[maxRow][col] === 'O') recordAndFlip(maxRow, col);
  }
  for (let row = 0; row < board.length; row++) {
    if (board[row][0] === 'O') recordAndFlip(row, 0);
    if (board[row][maxCol] === 'O') recordAndFlip(row, maxCol);
  }
  // Flip everything to X's
  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      board[row][col] = 'X';
    }
  }

  // Flip recorded regions back to O's
  regions.forEach(cell => {
    let row = cell[0];
    let col = cell[1];
    board[row][col] = 'O';
  })

};