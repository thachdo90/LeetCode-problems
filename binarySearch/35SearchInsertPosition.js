/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// I: sorted array of ints, int
// O: int (index)
// C:
// E: insert at the beginning or at the end, when target is not in array

// stategy: binary search
// pseudocode
// init lower bound and upper bound
// loop until lower bound and upper bound are adjacent
  // calculate midValue
  // if midValue is less than target, update lower bound
  // else if midvalue is greater than target, update upper bound
  // if it's equal return the target
// at the end of the while loop, the lower bound and upper bound should be adjacent
// return the lower bound
var searchInsert = function(nums, target) {
  let LB = 0;
  let UB = nums.length - 1;
  if (target <= nums[0]) return 0;
  if (target === nums[UB]) return UB;
  if (target > nums[UB]) return nums.length;
  while (LB < UB - 1) {
    let midIndex = Math.floor((LB + UB) / 2);
    let midValue = nums[midIndex];
    if (midValue < target) {
      LB = midIndex;
    } else if (midValue > target) {
      UB = midIndex;
    } else {
      return midIndex;
    }
  }
  return UB;

};