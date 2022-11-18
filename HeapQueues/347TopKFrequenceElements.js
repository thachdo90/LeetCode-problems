/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let hashmap = {};
  for (let number of nums) {
    hashmap[number] = (hashmap[number] || 0) + 1;
  }
  let array = Object.entries(hashmap);
  array.sort((a, b) => b[1] - a[1])
  // console.log(array);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(array[i][0]))
  }
  return result;
};

// this is O(nlogn) the prompt says to do it in less time