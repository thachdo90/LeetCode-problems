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

/**
 * @param {string} s
 * @return {number}
 */
// I: String
// O: number
// C:
// E: string length of 0

// Observation: we could iterate and match up the number of open to closed parentheses to see if it's valid, but this will miss the nested valid substrings

// Strategy: one pass O(n)
// if the number of closed parentheses exceed open, we'll restart the count
var longestValidParentheses = function(s) {
  let longestCount = 0;
  let openCount = 0;
  let count = 0;
  for (let char of s) {
    if (char === '(') {
      openCount++;
      count++;
    } else {
      if (openCount > 0) {
        count++;
        openCount--;
        if (openCount === 0) longestCount = Math.max(longestCount, count);
      } else {
        // reset counts, starting new substring
        longestCount = Math.max(longestCount, count);
        openCount = 0;
        count = 0;
      }
    }
  }
  openCount = 0;
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') {
      openCount++;
      count++;
    } else {
      if (openCount > 0) {
        count++;
        openCount--;
        if (openCount === 0) longestCount = Math.max(longestCount, count);
      } else {
        // reset counts, starting new substring
        longestCount = Math.max(longestCount, count);
        openCount = 0;
        count = 0;
      }
    }
  }

  return longestCount;

};

// use a stack, this achieves what I wanted to do with a hashmap but a hashmap would be over kill.

var longestValidParentheses = function(s) {
  let longestCount = 0;
  let stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        longestCount = Math.max(longestCount, i - stack[stack.length - 1])
      }
    }
  }

  return longestCount;
};