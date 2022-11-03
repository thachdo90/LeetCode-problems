/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// I: two strings
// O: 0, -1, 1
// C:
// E: 0's or no revision stated

// Strategy: have two pointers, one for each string, that'll iterate up until the dot or the end of the string
// pseudocode:
// Init p1 = 0, p2 = 0
var compareVersion = function(version1, version2) {
  let p1 = -1;
  let p2 = -1;
  let num1, num2, str1, str2;
  while (p1 < version1.length || p2 < version2.length) {
    str1 = '';
    str2 = '';
    // move p1 up until dot or end of string
    while (p1 < version1.length) {
      p1++;
      if (version1[p1] === '.' || p1 === version1.length) {
        break;
      } else {
        str1 = str1 + version1[p1]
      }
    }
    while (p2 < version2.length) {
      p2++;
      if (version2[p2] === '.' || p2 === version2.length) {
        break;
      } else {
        str2 = str2 + version2[p2];
      }
    }
    num1 = parseInt(str1) || 0;
    num2 = parseInt(str2) || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
};