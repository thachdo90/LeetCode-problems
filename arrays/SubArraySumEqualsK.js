/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  I: array of ints
// O: int (number of subarrays that satisfy condition)
// C:
// E: array size 1,

// can't sort array because subarray has to be contiguous
// idea: use sliding window, can't use one that's sliding from left to right because array is not sorted
// idea: quadratic time, for each element, iterate through the remaining elements
// exceeded time limit
var subarraySum = function(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count;
};