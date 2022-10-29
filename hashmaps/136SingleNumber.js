/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let storage = new Set();
  for (let num of nums) {
    if (storage.has(num)) {
      storage.delete(num)
    } else {
      storage.add(num)
    }
  }
  let result;
  storage.forEach(value => result = value);
  return result;
};
