/**
 * @param {string} s
 * @return {string[]}
 */

// I: string
// O: array of strings
// C: s has letters, lower and upper, and digits
// E: only number

// strategy:
// iterate through the string, every time we encounter a letter, split it into two possibilities, lower and upper and recurse
// base case: reached the end of the string, add it to results
// time and space complexity O(2^n) where n is the number of letters in the string
var letterCasePermutation = function(s) {
  let results = [];
  const process = (string, start) => {
    for (let i = start; i < string.length; i++) {
      let char = string[i];
      let code = char.charCodeAt();
      if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
        let newStringA = string.slice(0, i) + char.toLowerCase() + string.slice(i + 1);
        let newStringB = string.slice(0, i) + char.toUpperCase() + string.slice(i + 1);
        process(newStringA, i + 1);
        process(newStringB, i + 1);
        return;
      }
    }
    results.push(string);
  }
  process(s, 0);
  return results;
};