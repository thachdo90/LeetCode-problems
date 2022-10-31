/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  I: array of ints
// O: same array
// C: no native sorts, in-place only
// E: only one or two colors presents, array length is 1

// Strategy: use pointers to move 1's up, then 2's up, then 3's up, this will be at most O(3n) time
var sortColors = function(nums) {
  let pointer = -1;
  // move all the zeroes up
  for (let p0 = 0; p0 < nums.length; p0++) {
    if (nums[p0] === 0) {
      pointer++;
      let temp = nums[p0];
      nums[p0] = nums[pointer];
      nums[pointer] = temp;
    }
  }
  for (let p1 = pointer + 1; p1 < nums.length; p1++) {
    if (nums[p1] === 1) {
      pointer++;
      let temp = nums[p1];
      nums[p1] = nums[pointer];
      nums[pointer] = temp;
    }
  }
  for (let p2 = pointer + 1; p2 < nums.length; p2++) {
    if (nums[p2] === 2) {
      pointer++;
      let temp = nums[p2];
      nums[p2] = nums[pointer];
      nums[pointer] = temp;
    }
  }
  return nums;
};