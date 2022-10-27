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


// optimization: sort array first
// if pointer1 points to value that's already greater than 1/3 target, break
// if pointer2 points to value that's greater than 1/2 remaining target, break
// if pointer3 points to value
// result: beats 89.68% in time
var threeSumSmaller = function(nums, target) {
  let count = 0;
  nums.sort((a, b) => a - b)
  for (let pointer1 = 0; pointer1 < nums.length - 2; pointer1++) {
    if (nums[pointer1] > target / 3) break;
    for (let pointer2 = pointer1 + 1; pointer2 < nums.length -1; pointer2++) {
      if (nums[pointer2] > (target - nums[pointer1]) / 2) break;
      for (let pointer3 = pointer2 + 1; pointer3 < nums.length; pointer3++) {
        if (nums[pointer3] > (target - nums[pointer1] - nums[pointer2])) break;
        if (nums[pointer1] + nums[pointer2] + nums[pointer3] < target) count++;
      }
    }
  }
  return count;
};