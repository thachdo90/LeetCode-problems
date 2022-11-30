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

var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let results = [];
  let sum = 0;
  let array = [];
  const process = (startIndex) => {
    for (let i = startIndex; i < candidates.length; i++) {
      let newNumber = candidates[i];
      array.push(newNumber);
      sum += newNumber;
      if (sum < target) {
        process(i);
      } else if (sum === target) {
        results.push(array.slice());
      }
      sum -= newNumber;
      array.pop();
    }
  }
  process(0);
  return results;
};