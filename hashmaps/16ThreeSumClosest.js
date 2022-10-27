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

// tried with optimization but still only beating 5%
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(closestSum - target)
  for (let pointer1 = 0; pointer1 < nums.length - 2; pointer1++) {
    let oneSumDiff = Math.abs(target - nums[pointer1]);
    for (let pointer2 = pointer1 + 1; pointer2 < nums.length - 1; pointer2++) {
      if (nums[pointer2] - oneSumDiff > diff) break;
      let twoSumDiff = Math.abs(target - nums[pointer1] - nums[pointer2]);
      for (let pointer3 = pointer2 + 1; pointer3 < nums.length; pointer3++) {
        if (nums[pointer3] - twoSumDiff > diff) break;
        let currentSum = nums[pointer1] + nums[pointer2] + nums[pointer3];
        let newDiff = Math.abs(currentSum - target);
        if (newDiff < diff) {
          closestSum = currentSum;
          diff = newDiff;
        }
      }
    }
  }
  return closestSum;
};