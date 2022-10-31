/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  I: array of ints
// O: array of ints
// C:
// E: array with length of 1, array without negatives

//  Strategy 1: squaring everything then sorting it, O(n) + O(nlogn)
// Strategy 2: iterate up until the first nonnegative number, then have two pointers iterating left and right
// two pointers approach , O(2n)

var sortedSquares = function(nums) {
  let p1 = 0;
  let negativeSquares = [];
  let results = [];
  while (nums[p1] < 0 && p1 < nums.length) {
    negativeSquares.push(nums[p1] ** 2)
    p1++;
  }
  let p2 = negativeSquares.length - 1;
  while (p2 >= 0 || p1 < nums.length) {
    let value2 = negativeSquares[p2];
    let value1 = nums[p1] ** 2;
    if (p1 >= nums.length) {
      results.push(value2);
      p2--;
    } else if (p2 < 0) {
      results.push(value1)
      p1++;
    } else {
      if (value1 <= value2) {
        results.push(value1);
        p1++;
      } else {
        results.push(value2);
        p2--;
      }
    }
  }
  return results;
};