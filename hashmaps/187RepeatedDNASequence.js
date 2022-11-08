/**
 * @param {string} s
 * @return {string[]}
 */
// I: string
// O: array of strings of length 10
// C:
// E: s is less than 10 letters long
// Strategy: using a hashmap to track occurence of substrings, use a sliding window to scan the string
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) return [];
  let results = [];
  let hashmap = {};
  // set up window
  let substring = '';
  for (let endIndex = 10; endIndex <= s.length; endIndex++) {
    let substring = s.slice(endIndex - 10, endIndex);
    hashmap[substring] = (hashmap[substring] || 0) + 1;
    if (hashmap[substring] === 2) results.push(substring);
  }
  return results;
};