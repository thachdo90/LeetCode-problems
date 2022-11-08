/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// I: two numbers
// O: array of arrays, representing possible combinations of numbers
// C: no order constraint, [1,2] is the same as [2, 1], k less than or equal to n
// E: k equal to n, only 1 possible
// strategy: recursion, tree, no but this would cause repeats
// strategy: iteration and recursion
// iterate through each index of the array, keep track of how many elements are still needed

// new strategy: use a hashmap to track the size of arrays based on numbers we've visited
// hashmap: keys will be the size of the array, the value will be an array of arrays of this size
// every time we visit a new number, we look back in the hashmap to add to existing arrays of different sizes
// when we iterate we'll start with k-1 of current - 1, whichever is smaller then iterate through 0;

// O(nCk) i.e. size of the output array
var combine = function(n, k) {
  let hashmap = {};
  for (let i = 1; i <= n; i++) {
    let start = Math.min(i - 1, k - 1);
    if (hashmap[start + 1] === undefined) hashmap[start + 1] = [];
    for (let j = start; j >= 0; j--) {
      if (hashmap[j] === undefined) {
        hashmap[j + 1].push([i]);
      } else {
        for (let array of hashmap[j]) {
          let newArray = array.slice();
          newArray.push(i);
          hashmap[j + 1].push(newArray)
        }
      }
    }
  }
  console.log(hashmap)
  return hashmap[k];
};