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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// I: array of numbers
// O: number (a count of the subarrays that satisfies condition)
// C: all numbers are greater than or equal to 1
// E:
// strategy: using math and a sliding window
// find the first largest possible window that multiplies to be less than k
// whenever k
// challenge not double counting subarrays
var numSubarrayProductLessThanK = function(nums, k) {
  let result = 0;
  let left = 0;
  let right = 0;
  let product = 1;
  let previousEndIndex = -1;
  const numOfSubArrays = (count) => {
    return (1 + count) / 2 * count;
  }
  while (right <= nums.length) {
    product *= nums[right] || 1;
    if (product >= k || right === nums.length) {
      let count = right - left;
      result += numOfSubArrays(count);
      if (left <= previousEndIndex) {
        let overlap = numOfSubArrays(previousEndIndex - left + 1);
        result -= overlap;
      }
      previousEndIndex = right - 1;
      while (product >= k) {
        product /= nums[left];
        left++;
      }
    }
    right++;
  }
  return result;
};