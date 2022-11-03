/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: number, length of palindrome
// C:
// E:

// strategy: iterate through each character and the space between the chars
// have two pointers that iterate outward from the center, if they match, add 2 to the count
// a string that has 8 characters also has 7 spaces in between, a string with n length also has n - 1 spaces in between
// totally misunderstood the problem

var longestPalindrome = function(s) {
  let longestCount = 0;
  for (let i = 0; i < 2 * s.length - 1; i++) {
    // case 1: center is on a character
    if (i % 2 === 0) {
      let center = i / 2;
      let p1 = center;
      let p2 = center;
      let count = 1;
      while (p1 > 0 && p2 < s.length - 1) {
        p1--;
        p2++;
        if (s[p1] === s[p2]) {
          count += 2;
        } else {
          break
        }
      }
      longestCount = Math.max(longestCount, count);
    } else {
      // case 2: center is in between characters
      let p1 = Math.floor(i / 2);
      let p2 = p1 + 1;
      let count = 0;
      while (p1 >= 0 && p2 <= s.length - 1) {
        if (s[p1] === s[p2]) {
          count += 2;
        } else {
          break;
        }
        p1--;
        p2++;
      }
      longestCount = Math.max(longestCount, count);
    }
  }
  return longestCount;
};

/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: number, length of palindrome
// C:
// E:

// strategy: iterate through each character and the space between the chars
// have two pointers that iterate outward from the center, if they match, add 2 to the count
// a string that has 8 characters also has 7 spaces in between, a string with n length also has n - 1 spaces in between
// totally misunderstood the problem

var longestPalindrome = function(s) {
  let storage = new Set();
  let oddCount = 0;
  let length = 0;
  for (let char of s) {
    if (!storage.has(char)) {
      oddCount++;
      storage.add(char);
    } else {
      oddCount--;
      length += 2;
      storage.delete(char);
    }
  }

  if (oddCount > 0) length++;
  return length;
};