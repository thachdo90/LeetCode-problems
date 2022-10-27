/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumSmaller = function(nums, target) {
  let count = 0;
  for (let pointer1 = 0; pointer1 < nums.length - 2; pointer1++) {
    for (let pointer2 = pointer1 + 1; pointer2 < nums.length -1; pointer2++) {
      for (let pointer3 = pointer2 + 1; pointer3 < nums.length; pointer3++) {
        if (nums[pointer1] + nums[pointer2] + nums[pointer3] < target) count++;
      }
    }
  }
  return count;
};