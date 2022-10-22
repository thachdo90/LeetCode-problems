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

// second strategy, didn't optimize any more
// var maxArea = function(height) {
//   let leftWalls = [[0,height[0]]]; //[index, height]
//   let maxArea = 0;
//   for (let i = 1; i < height.length; i++) {
//     let currentHeight = height[i];
//     for (leftWall of leftWalls) {
//       let leftHeight = leftWall[1]
//       let leftIndex = leftWall[0];
//       let area = Math.min(leftHeight, currentHeight) * (i - leftIndex);
//       maxArea = Math.max(maxArea, area);
//     }
//     let previousHeight = leftWalls[leftWalls.length - 1][1];
//     if (currentHeight > previousHeight) leftWalls.push([i, height[i]]);
//   }

//   return maxArea;
// }

// left and right pointer approach (after watching solution video)
// what worked about this is that they found a pattern that allowed us to confidently move the pointer forward based on the comparison of the left and right heights. We don't have to worry about tracking previously seen heights because we know that the other height already limits it
var maxArea = function(height) {
  let biggestArea = 0;
  let leftPointer = 0;
  let rightPointer = height.length -1;
  while (leftPointer < rightPointer) {
    let leftHeight = height[leftPointer];
    let rightHeight = height[rightPointer];
    let area = Math.min(leftHeight, rightHeight) * (rightPointer - leftPointer);
    biggestArea = Math.max(biggestArea, area);
    if (leftHeight <= rightHeight) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return biggestArea;
}