/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: int
// C:
// E: 0 length string
// strategy: quadratic time
// iterate through each character, for each character find the longest unique substring with this character as the start
// optimization, don't iterate if potential length is already less than current optimal length
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let longestCount = 0;
  for (let p1 = 0; p1 < s.length; p1++) {
      if (s.length - p1 <= longestCount) break;
      let storage = new Set();
      let count = 0;
      for (let p2 = p1; p2 < s.length; p2++) {
          let currChar = s[p2];
          if (storage.has(currChar)) {
              longestCount = Math.max(longestCount, count);
              break;
          } else {
              storage.add(currChar);
              count++;
          }
      }
      longestCount = Math.max(longestCount, count);
  }
  return longestCount;
};

var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let p1 = 0;
  let p2 = 0;
  let storage = new Set();
  let longestCount = 1;
  while (p2 < s.length) {
    let value2 = s[p2]
    if (!storage.has(value2)) {
      storage.add(value2)
    } else {
      console.log('updating count ', p1, ' to ', p2)
      let count = p2 - p1;
      longestCount = Math.max(longestCount, count);
      while (s[p1] !== value2) {
        storage.delete(s[p1]);
        p1++;
      }
      p1++;
    }
    p2++;
  }
  let count = p2 - p1;
  longestCount = Math.max(longestCount, count);
  return longestCount;

};