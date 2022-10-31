/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  I: array of ints
// O: same array
// C: modify in place
// E: array of length 1, all 0's, no 0's

// Strategy: two pointers
// first pointer will iterate until it encounters a zero
// second pointer will start from first pointer and go out to search for non zero
// time complexity O(2n) = O(n)
var moveZeroes = function(nums) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    if (nums[p1] === 0) {
      let p2 = p1 + 1;
      while (nums[p2] === 0) {
        p2++;
      }
      if (p2 >= nums.length) return nums;
      nums[p1] = nums[p2];
      nums[p2] = 0;
    }
  }
  return nums;
};