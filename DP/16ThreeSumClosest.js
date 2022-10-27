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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// trying two pointers approach as stated in solution
// pseudo code
// sort array
// iterate through array
  // set up two pointers at the far left and right of subarray (i +1 and length - 1)
  // newtarget is target - nums[i], we want the two remaining sums to be as close to this as possible
  // calculate the newDiff, which is newTarget - (sumOfTwo)
  // if the newDiff is positive, we can increment the left to make the sumOfTwo bigger, to be closer to newTarget
  // otherwise, decrement the right;
  // at every step, update closestSum;
  var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let p1 = 0; p1 < nums.length - 2; p1++) {
      let p2 = p1 + 1;
      let p3 = nums.length - 1;
      let newDiff = target - nums[p1];
      while (p2 < p3) {
        let twoSum = nums[p2] + nums[p3];
        let finalDiff = newDiff - twoSum;
        if (Math.abs(newDiff - twoSum) < Math.abs(closestSum - target)) closestSum = nums[p1] + twoSum;
        if (finalDiff> 0) {
          p2++;
        } else if (finalDiff < 0) {
          p3--;
        } else {
          return nums[p1] + twoSum;
        }
      }
    }
    return closestSum;

  }