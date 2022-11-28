/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// I: two strings
// O: Boolean
// C: lower case and # characters only
// E: multiple # chars in a row

// Strategy: iterate from right to left, use two pointers to compare the two strings
var backspaceCompare = function(s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;
  let deleteCount1 = 0;
  let deleteCount2 = 0;
  while (p1 >= 0 || p2 >= 0) {
    while (s[p1] === '#' || deleteCount1 > 0) {
      if (s[p1] === '#') {
        deleteCount1++;
      } else {
        deleteCount1--;
      }
      p1--
    }
    while (t[p2] === '#' || deleteCount2 > 0) {
      if (t[p2] === '#') {
        deleteCount2++;
      } else {
        deleteCount2--;
      }
      p2--
    }
    if (s[p1] !== t[p2]) {
      return false;
    }
    p1--;
    p2--;
  }
  return true;
};