/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let results = [[]];
  for (let number of nums) {
    let newArrays = [];
    for (let set of results) {
      let newSet = set.slice();
      newSet.push(number);
      newArrays.push(newSet);
    }
    results = results.concat(newArrays)
  }
  return results;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let results = [[]];
  let current = [];
  const process = (index) => {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      results.push(current.slice());
      if (i < nums.length - 1) {
        process(i + 1)
      }
      current.pop();
    }
  }
  process(0);
  return results;
};