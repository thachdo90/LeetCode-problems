/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// strategy: iterate through the matrix, at each element, recursively backtrack to find the word, DFS
// strategy to mark visited cells 'A' -> 'AX', we won't visit cells that have a length of 2. To toggle it back, we'll simply drop the second letter
var exist = function(board, word) {
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;

  const toggle = (row, col) => {
    let cell = board[row][col];
    if (cell.length === 2) {
      board[row][col] = cell[0];
    } else {
      board[row][col] = cell + 'X';
    }
  }

  const getNeighbors = (row, col) => {
    let neighbors = [];
    if (row > 0) neighbors.push([row - 1, col]);
    if (row < maxRow) neighbors.push([row + 1, col]);
    if (col > 0) neighbors.push([row, col - 1]);
    if (col < maxCol) neighbors.push([row, col + 1]);
    return neighbors;
  }

  const findWord = (row, col, index = 0) => {
    // base case, the last letter matches, return true
    if (board[row][col] === word[index]) {
      if (index === word.length - 1) {
        return true;
      } else {
        toggle(row, col);
        let neighbors = getNeighbors(row, col);
        for (let neighbor of neighbors) {
          let nbRow = neighbor[0];
          let nbCol = neighbor[1];
          if (board[nbRow][nbCol].length === 1 && findWord(nbRow, nbCol, index + 1)) return true;
        }
        toggle(row, col);
      }
    } else {
      return false;
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (findWord(row, col)) return true;
    }
  }
  return false;
};