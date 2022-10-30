/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// I: two strings
// O: int, index, first occurence or -1 if not found
// C:
// E: multiple occurences, not found, single letter

// Strategy:
// iterate through haystack
// if first character matches, search that subtring
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          let match = true;
          for (let j = 1; j < needle.length; j++) {
              if (haystack[i + j] !== needle[j]) {
                  match = false;
                  break;
              }
          }
          if (match) return i
      }
  }
  return -1;
};