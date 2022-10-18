/**
 * @param {number[][]} wall
 * @return {number}
 */
//  I: matrix
// O: numeric value, representing # of bricks crossed
// C: none
// E: wall length = 1;
// strategy: iterate through matrix, record many bricks lay in the middle of a particular index
// return the min values of object values
// pseudocode:
// handle edge case, if wall length = 1, return length of matrix (number of rows)
// declare bricksCrossed object to track how many bricks are crossed at index 1, 2, 3, ... length - 1
// iterate through the matrix
  // declare object to track index where the edges are
  // iterate through each row of bricks, update where the edges are in an object
  // compare edges object to bricksCrossed object, if an edge isn't there, then we've crossed a brick
// get min value of values in brickCrossed object
var leastBricks = function(wall) {
  let wallLength = wall[0].reduce((accumulator, element) => accumulator + element, 0);
  if (wallLength === 1) {
    return wall.length;
  }
  let bricksCrossed = {}; // bricksCrossed[index] = # of bricks crossed
  for (let row of wall) {
    let index = 0;
    let edges = {}; //edges[index] = true for every brick edge
    for (let brick of row) {
      index += brick;
      edges[index] = true;
    }
    for (let i = 1; i < wallLength; i++) {
      if (!edges[i]) bricksCrossed[i] = (bricksCrossed[i] || 0) + 1;
    }
  }
  return Math.min(...Object.values(bricksCrossed));
};