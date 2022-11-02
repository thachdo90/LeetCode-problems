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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  I: array of ints
// O: int (number of subarrays that satisfy condition)
// C:
// E: array size 1,

// strategy: linear time
// iterate through array
// as we iterate, add to the current and store it in a hashmap
// if we subtract k from the current sum, we find the value of excess (that we could subtract, i.e. detach from this array), if this value exists in the hashmap, that means there exists a subarray with a sum equal to this excess that can be detached
// because there could be multiple subarrays prior that equal to the same excess, we'll store the frequency in the hashmap
var subarraySum = function(nums, k) {
  let hashmap = {};
  let count = 0;
  let sum = 0;
  hashmap[sum] = 1;
  for (let number of nums) {
    sum += number;
    let excess = sum - k;
    if (hashmap[excess] !== undefined) count += hashmap[excess];
    hashmap[sum] = (hashmap[sum] || 0) + 1;
  }
  return count;
};