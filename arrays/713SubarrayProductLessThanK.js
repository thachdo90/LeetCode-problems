/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// I: array of numbers
// O: number (a count of the subarrays that satisfies condition)
// C: all numbers are greater than or equal to 1
// E:
// Strategy: bruteforce, O(n^2), iterate through array, at each element, iterate again
// strategy: sliding window
var numSubarrayProductLessThanK = function(nums, k) {
  let results = 0;
  for (let p1 = 0; p1 < nums.length; p1++) {
    let product = 1;
    for (let p2 = p1; p2 < nums.length; p2++) {
      product *= nums[p2];
      if (product < k) {
        results++;
      } else {
        break;
      }
    }
  }
  return results;
};