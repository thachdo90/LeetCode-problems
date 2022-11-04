/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// I: two strings
// O: Boolean
// C: pattern is only lower case letters, s are all lower case words separated by a single space, s as not leading or trailing spaces
// E: s and pattern have different lengths;

// Strategy: break up s into an array, iterate through pattern and this array simultaneously, store pairings in hashmap
// Time O(m + n)
var wordPattern = function(pattern, s) {
  let hashmap = {};
  let words = s.split(' ');
  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (hashmap[pattern[i]] === undefined) {
      hashmap[pattern[i]] = words[i];
    } else {
      if (hashmap[pattern[i]] !== words[i]) return false;
    }
  }
  let values = new Set(Object.values(hashmap));
  return (Object.keys(hashmap).length === values.size)

};