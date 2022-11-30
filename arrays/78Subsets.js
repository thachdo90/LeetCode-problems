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