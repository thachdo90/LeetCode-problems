/**
 * @param {number[]} height
 * @return {number}
 */

//  I: array of ints
// O: numeric value, max area of water
// C: none
// E: area = 0, one height in the middle, but water runs off on the side

// strategy 1: optimized quadratic time
// check every pair of heights (quadratic time), calculate the area, update maxArea
// optimization: skip iterating through values that would be for sure under the current max

// pseudocode:
// init maxArea to 0
// iterate through heights array, leftWall
  // optimization: if leftWall height * maxWidth < maxarea, skip
  // iterate backwards through heights, rightWall
  // compute area min(height1, height2) * ( width)
  // update maxArea
// return maxArea

var maxArea = function(height) {
  let maxArea = 0;
  let length = height.length;
  for (let leftWall = 0; leftWall < height.length; leftWall++) {
    let leftHeight = height[leftWall];
    if (leftHeight * (length - 1 - leftWall) > maxArea) {
      for (let rightWall = length - 1; rightWall > leftWall; rightWall--) {
        if (leftHeight * (rightWall - leftWall) <= maxArea) break;
        let rightHeight = height[rightWall];
        let area = Math.min(leftHeight, rightHeight) * (rightWall - leftWall);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};