/**
 * @param {number[]} nums
 * @return {number}
 */

//  strategy: iterate through nums, keep track of value and its count as key value pairs in hashmap
// keep a separate tuple with the value and the highest count so far, this will be updated after the hashmap is updated
var majorityElement = function(nums) {
  let storage = {};
  let mostFrequent = [nums[0], 1];  //[value, total count]
  for (let number of nums) {
    storage[number] = (storage[number] || 0) + 1;
    if (storage[number] > mostFrequent[1]) {
      mostFrequent[0] = number;
      mostFrequent[1] = storage[number];
    }
  }
  return mostFrequent[0];
};