/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  let results = [[]];
  let current = [];
  let set = new Set();

  const process = (index) => {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      let newArray = current.slice().sort((a, b) => a - b);
      let arrayString = JSON.stringify(newArray);
      if (!set.has(arrayString)) {
        results.push(newArray);
        set.add(arrayString);
      }
      if (i < nums.length - 1) {
        process(i + 1);
      }
      current.pop();
    }
  }
  process(0);
  return results;

};