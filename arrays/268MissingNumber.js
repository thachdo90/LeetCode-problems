/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of ints
// O: int, the missing number
// C: O(1) space, O(n) time
// E: array is complete and missing number is the next one

// strategy: use math to find the theoretical sum of the range using arithmetic sum formula
// find the sum of the array
// subtract sum of array from theoretical sum, to find the missing number
// note, this breaks for 0, so check that 0 is in there, if it is, return n

//case1: no number missing, so the difference is 0
//case2: 0 is missing, but the difference will still be 0;
//case3: a number is missing, the difference will be negative because the actual sum has the nth number in there, so we'll return diff + nth
var missingNumber = function(nums) {
  //version of arithmetic sum formula
  let theoreticalSum = (nums.length - 1) / 2 * nums.length;
  let hasZero = false;
  let total = 0;
  for (let number of nums) {
      if (number === 0) hasZero = true;
      total += number;
  }
  let diff = theoreticalSum - total;
  if (diff === 0) {
      return hasZero ? nums.length : 0;
  } else {
      return diff + nums.length;
  }
};