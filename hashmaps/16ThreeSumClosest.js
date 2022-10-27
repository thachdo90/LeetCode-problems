/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  cubic time, keep track of closest sum
var threeSumClosest = function(nums, target) {
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let pointer1 = 0; pointer1 < nums.length - 2; pointer1++) {
    for (let pointer2 = pointer1 + 1; pointer2 < nums.length - 1; pointer2++) {
      for (let pointer3 = pointer2 + 1; pointer3 < nums.length; pointer3++) {
        let currentSum = nums[pointer1] + nums[pointer2] + nums[pointer3];
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) closestSum = currentSum
      }
    }
  }
  return closestSum;
};