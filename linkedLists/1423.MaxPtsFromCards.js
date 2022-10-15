/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
//  I: array and number
//  O: number (max value)
//  C: none
//  E: card points has length 1

// strategy: handle edge case first, if k > cardpoints.length, return sum of array
// declare two sums leftSum, rightSum, maxSum
// iterate leftPointer out to calculate leftSum
// iterate leftPoint back, each time, move the rightPointer left
  //calculate leftSum and rightSum at each step, update maxSum
// return maxSum
var maxScore = function(cardPoints, k) {
  if (k === cardPoints.length) {
      return cardPoints.reduce((accumulator, value) => accumulator + value, 0)
  }
  let leftPointer = 0;
  let rightPointer = cardPoints.length;
  let leftSum = rightSum = maxSum = 0;
  while (leftPointer < k) {
      leftSum += cardPoints[leftPointer]
      leftPointer++;
  }
  maxSum = leftSum;
  while (leftPointer > 0) {
      leftPointer--;
      leftSum -= cardPoints[leftPointer];
      rightPointer--;
      rightSum += cardPoints[rightPointer];
      maxSum = Math.max(maxSum, leftSum + rightSum);
  }
  return maxSum;

};