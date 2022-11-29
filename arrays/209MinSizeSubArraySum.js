/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// I: number, array of numbers
// O: number, representing length of smallest subarray
// C: all values are greater than or equal to 1
// E: no solution, return 0

// strategy: use a sliding window
// expand window until greater than or equal to target
// contract window until less than target, while recording size
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let min;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      while (sum >= target) {
        let count = right - left + 1;
        min = Math.min(min, count) || count;
        sum -= nums[left];
        left++;
      }
    }
    right++;
  }
  return min || 0;
};