// I: matrix
// O: numeric value, # of connections
// C: none
// E: no nodes present

// strategy: iterate backwards in the matrix, starting with the last row, track the number of nodes present and the number of connections formed at each row.
// declare countOfConnections = 0;
// declare countOfNextNodes = 0;
// for each row, count the current nodes
  //if there are nodes calculate connections (current # nodes * # of nodes at next level possible), current # of nodes becomes countOfNextNodes
  // else, disregard this row


const countConnections = (matrix) => {
  let countOfConnections = countOfNextNodes = 0;
  for (let i = matrix.length - 1; i >= 0; i--) {
    let row = matrix[i];
    let countOfNodes = row.reduce((acc, element) => acc + element, 0);
    if (countOfNodes > 0) {
      countOfConnections += countOfNodes * countOfNextNodes;
      countOfNextNodes = countOfNodes;
    }
  }
  return countOfConnections
}

let grid;

// TEST 1
grid = [[1,1,1], [0,1,0], [0,0,0], [1,1,0]]
console.log(countConnections(grid), ' should be ', 5)

// // TEST 2
grid = [[1,1,1], [1,1,0], [0,0,0], [1,1,0]]
console.log(countConnections(grid), ' should be ', 10)

// TEST 3
grid = [[1,1,1], [0,1,0], [0,1,0], [1,1,0]]
console.log(countConnections(grid), ' should be ', 6)

// TEST 4
grid = [[1,1,1], [1,1,0], [0,1,0], [1,1,0]]
console.log(countConnections(grid), ' should be ', 10)

// TEST 5
grid = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
console.log(countConnections(grid), ' should be ', 0)

// TEST 6
grid = [[0,0,0]]
console.log(countConnections(grid), ' should be ', 0)
