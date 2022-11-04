/**
 * @param {string} s
 * @return {number}
 */
// I: String
// O: number
// C:
// E: string length of 0

// Observation: we could iterate and match up the number of open to closed parentheses to see if it's valid, but this will miss the nested valid substrings

// Brute force: iterate through every possible substring O(n^2)

// Idea: have two pointers at the ends and move them inwards

// Iterate from the left, then iterate from the right and compare

// Strategy: could we use a hashmap to remember where certain brackets are?
var longestValidParentheses = function(s) {
  let longestCount = 0;
  for (let i = 0; i < s.length; i++) {
    let openCount = 0;
    let count = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === '(') {
        openCount++;
        count++;
      } else {
        if (openCount > 0) {
          count++;
          openCount--;
          if (openCount === 0) longestCount = Math.max(longestCount, count);
        } else {
          // reset counts, starting new substring
          longestCount = Math.max(longestCount, count)
          openCount = 0;
          count = 0;
        }
      }
    }
  }
  return longestCount;

};