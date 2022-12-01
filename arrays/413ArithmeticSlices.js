/**
 * @param {number[]} nums
 * @return {number}
 */

// I: Array of ints
// O: number
// C: subarray must be at least lenght of 3
// E: subarray at the end

// strategy: use a sliding window and math to calculate
var numberOfArithmeticSlices = function(nums) {
  let count = 0;
  if (nums.length < 3) return count;

  const firstNSum = (n) => {
    if (n < 1) return 0;
    return (1 + n) / 2 * n
  }

  let p1 = 0;
  let p2 = 1;
  let diff = nums[p2] - nums[p1];
  while (p2 <= nums.length) {
    let newDiff = nums[p2] - nums[p2 - 1];
    if (newDiff !== diff || p2 === nums.length) {
      count += firstNSum(p2 - p1 - 2);
      p1 = p2 - 1;
      diff = newDiff;
    }
    p2++;
  }
  return count;
};