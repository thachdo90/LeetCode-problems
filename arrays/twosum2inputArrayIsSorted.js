/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// I: array of int
// O: array of two indices
// C: 1-indexed array, constant extra space, can't use same element twice
// E: negative values

// strategy: two pointers approach, starting at 0 and last index
// calculate the sum of the two pointers, if it's below the target, move left pointer forward, if it's above, move right pointer backwards
var twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2]
    if (sum < target) {
      p1++;
    } else if (sum > target) {
      p2--;
    } else {
      return [p1 + 1, p2 + 1];
    }
  }
};