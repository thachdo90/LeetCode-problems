/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// strategy:
//
var combinationSum = function(candidates, target) {
  let results = [];
  candidates.sort((a, b) => a - b);
  const process = (array, startIndex, sum) => {
    for (let i = startIndex; i < candidates.length; i++) {
      let newArray = array.slice();
      newArray.push(candidates[i]);
      let newSum = sum + candidates[i];
      if (newSum < target) {
        process(newArray, i, newSum);
      } else if (newSum === target) {
        results.push(newArray);
      }
    }
  }
  process([], 0, 0);
  return results;
};