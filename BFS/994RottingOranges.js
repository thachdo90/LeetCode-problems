var orangesRotting = function(grid) {
  let minutes = 0;
  let queue = [];
  let maxRow = grid.length - 1;
  let maxCol = grid[0].length - 1;
  let freshOrange = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        freshOrange++;
      }
    }
  }

  // const checkCell = (row, col) => {
  //   if (grid[row][col] === 1) {
  //     grid[row][col] = 2;
  //     freshOrange--;
  //     newQueue.push([row, col])
  //   }
  // }

  let storage = {
    newQueue: [],
    checkCell: (row, col) => {
    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      freshOrange--;
      storage.newQueue.push([row, col])
    }
  }
  }
  if (queue.length === 0) return freshOrange > 0 ? -1 : 0;

  while (queue.length > 0) {
    minutes++;
    storage.newQueue = [];
    while (queue.length > 0) {
      let cell = queue.pop();
      let row = cell[0];
      let col = cell[1];
      // check right
      if (col < maxCol) storage.checkCell(row, col + 1);
      // check left
      if (col > 0) storage.checkCell(row, col - 1);
      // check up
      if (row > 0) storage.checkCell(row - 1, col);
      // check down
      if (row < maxRow) storage.checkCell(row + 1, col);
    }
    queue = storage.newQueue;
  }
  if (freshOrange > 0) {
    return - 1;
  } else {
    return minutes - 1;
  }

};