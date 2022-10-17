/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  store frequency in object/hashmap O(n) time O(n) space
// get keys of hashmap, sort it, store in sorted array O(logn) time, O(n) space
// iterate through sorted array, calculate the accumulation O(n) time, O(n)
var smallerNumbersThanCurrent = function(nums) {
  let frequencyTable = {};
  for (let number of nums) {
      if (frequencyTable[number]) {
          frequencyTable[number][0] +=1;
      } else {
          frequencyTable[number] = [1]
      }
  }
  let sortedKeys = Object.keys(frequencyTable).sort((a, b) => a - b)
  let total = 0;
  for (element of sortedKeys) {
      frequencyTable[element][1] = total;
      total += frequencyTable[element][0]
  }
  let results = [];
  for (let number of nums) {
      results.push(frequencyTable[number][1])
  }
  return results;
};