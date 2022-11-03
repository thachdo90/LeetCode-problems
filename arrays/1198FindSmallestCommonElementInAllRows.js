/**
 * @param {number[][]} mat
 * @return {number}
 */

// I: matrix of ints
// O: number, or -1
// C: probably time complexity
// E:

// strategy: iterate and record count of number
// if number equals the number of rows, that means it occured in every row
// time O(m^2), space O(n)

// strategy2: given that each row is strictly increasing, we can have pointers on each row inching forward, this would get rid of the need for O(n) space, the challenge is that we don't know how many pointers we'll need, oh but we'll need m space to store the pointers anyway
var smallestCommonElement = function(mat) {
  let hashmap = {};
  let minNum;
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      let number = mat[row][col];
      hashmap[number] = (hashmap[number] || 0) + 1;
      if (hashmap[number] === mat.length) {
        minNum = Math.min(minNum, number) || number;
      }
    }
  }
  return minNum === undefined ? -1 : minNum;
};