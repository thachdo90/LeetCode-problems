/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of ints
// O: number
// C: sequence has to be strictly increasing, subarray does not have to be contiguous but should be in order
// E:
var findNumberOfLIS = function(nums) {
  let hashmap = {}
  for (let num of nums) {
    let count;
    let length = 0;
    for (let prop in hashmap) {
      if (num > Number(prop)) {
        if (hashmap[prop].length > length) {
          length = hashmap[prop].length;
          count = hashmap[prop].count;
        } else if (hashmap[prop].length === length) {
          count += hashmap[prop].count;
        }
      }
    }
    if (hashmap[num] === undefined) {
      hashmap[num] = {
        count: count || 1,
        length: length + 1
      }
    } else {
      if (length + 1 > hashmap[num].length) {
        hashmap[num].count = count || 1;
        hashmap[num].length = length + 1;
      } else if (length + 1 === hashmap[num].length) {
        hashmap[num].count += (count || 1);
      }
    }
  }
  let result = 0;
  let maxLength = 0;
  for (let item of Object.values(hashmap)) {
    if (item.length > maxLength) {
      maxLength = item.length;
      result = item.count;
    } else if (item.length === maxLength) {
      result += item.count;
    }
  }
  return result;

};