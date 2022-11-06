var updateMatrix = function(mat) {
  let results = [];
  let maxRow = mat.length - 1;
  let maxCol = mat[0].length - 1;
  for (let i = 0; i < mat.length; i++) {
    results.push([]);
  }
  let queue = [];
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        results[row][col] = 0;
        queue.push([row,col]);
      }
    }
  }
  while (queue.length > 0) {
    let nextQueue = [];
    while (queue.length > 0) {
      let cell = queue.pop();
      let row = cell[0];
      let col = cell[1];
      // check up
      if (row > 0) {
        let cellAbove = results[row - 1][col];
        if (cellAbove === undefined || cellAbove > results[row][col] + 1) {
          results[row - 1][col] = results[row][col] + 1;
          nextQueue.push([row - 1, col])
        }
      }
      // check down
      if (row < maxRow) {
        let cellBelow = results[row + 1][col];
        if (cellBelow === undefined || cellBelow > results[row][col] + 1) {
          results[row + 1][col] = results[row][col] + 1;
          nextQueue.push([row + 1, col])
        }
      }
      // check left
      if (col > 0) {
        let cellLeft = results[row][col - 1];
        if (cellLeft === undefined || cellLeft > results[row][col] + 1) {
          results[row][col - 1] = results[row][col] + 1;
          nextQueue.push([row, col - 1])
        }
      }
      // check right
      if (col < maxCol) {
        let cellRight = results[row][col + 1];
        if (cellRight === undefined || cellRight > results[row][col] + 1) {
          results[row][col + 1] = results[row][col] + 1;
          nextQueue.push([row, col + 1])
        }
      }
    }
    queue = nextQueue;
  }
  return results;
};