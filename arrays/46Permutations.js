/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// I: Array of ints
// O: array of arrays, representing permutations possible
// C: all ints of nums are unique, be careful of time complexity
// E: array of length 1

// strategy:
// init results
// helper function to recurse (currentArray, options)
// base case: the options array is empty, so add the currentArray
// iterate through the nums array
  // take each element out of the options array and push it to currentArray, figure out what's left in options
  // recurse with the currentArray and options

// return results

// Time O(n!)
var permute = function(nums) {
  let results = [];
  const process = (currentArray, options) => {
    if (options.length === 0) {
      results.push(currentArray)
    } else {
      for (let i = 0; i < options.length; i++) {
        let newOptions = options.slice(0, i).concat(options.slice(i + 1, options.length));
        let newCurrentArray = currentArray.slice();
        newCurrentArray.push(options[i]);
        process(newCurrentArray, newOptions);
      }
    }
  }
  process([], nums);
  return results;
};