/**
 * @param {number[][]} triangle
 * @return {number}
 */
// I: array of arrays
// O: number, min sum of the path
// C:
// E: only one step

// Observation:
// can reach any element in the bottom row
// the next row is always bigger by 1
// what if we traversed the array backwards?
// the top row always has 1 element, so that's always chosen
// as we're traversing down, we don't know what lies ahead so we can't make a definitive optimal solution at that current step
// going backwards, we can backtrack by going up or left

// strategy: bottoms up, time and space O(T) where T is the number of elements in the triangle
// iterate through the triangle, at each element, we are able to find the optimal solution for that cell
// by the time we get to the last row, we'll keep track of the min value

var minimumTotal = function(triangle) {
  let sums = [];
  for (let row = 0; row < triangle.length; row++) {
    let currentRow = [];
    for (let col = 0; col < triangle[row].length; col++) {
      let previousValue;
      if (sums[row - 1] === undefined) {
        previousValue = 0;
      } else if (sums[row - 1][col] === undefined) {
        previousValue = sums[row - 1][col - 1];
      } else if (sums[row - 1][col - 1] === undefined) {
        previousValue = sums[row - 1][col];
      } else {
        previousValue = Math.min(sums[row - 1][col], sums[row - 1][col - 1])
      }
      currentRow.push(previousValue + triangle[row][col]);
    }
    sums.push(currentRow)
  }
  let min = Infinity;
  for (let element of sums[sums.length - 1]) {
    if (element < min) min = element;
  }
  return min;

};