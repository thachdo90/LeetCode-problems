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

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let uniques = new Set();
  let total = 0;
  for (let number of nums) {
    if (uniques.has(number)) {
      total -= number;
    } else {
      uniques.add(number);
      total += number;
    }
  }
  return total;

};