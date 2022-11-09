/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 2) {
      return Math.max(nums[0], nums[1]);
  } else if (nums.length === 1) {
      return nums[0];
  }

  let array = [0, nums[nums.length - 1], nums[nums.length - 2]];

  for (let i = nums.length - 3; i >= 0; i--) {
      let optimal = Math.max(array[array.length - 1], nums[i] + Math.max(array[array.length - 2], array[array.length - 3]));
      array.push(optimal);
  }

  return array[array.length - 1];
};