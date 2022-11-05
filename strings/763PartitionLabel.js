/**
 * @param {string} s
 * @return {number[]}
 */

// I: string
// O: array of numbers
// C:
// E: length of 1, result is the entire string length

// strategy: two iterations and hashmaps
// first pass, get a total count of all the letters
// second pass, keep a hashmap of the letters and check its total count, if the count ever meets the total count, this is a complete substring
// Time complexity O(2n) => O(n), space O(2n)
var partitionLabels = function(s) {
  let hashmap = {};
  for (let char of s) {
    hashmap[char] = (hashmap[char] || 0) + 1
  }

  let results = [];
  let hashmap2 = {
    complete: 0,
    total: 0,
    size: 0
  };
  for (let char of s) {
    hashmap2.size++;
    if (hashmap2[char] === undefined) {
      hashmap2[char] = 1;
      hashmap2.total += 1;
    } else {
      hashmap2[char] += 1;
    }
    // this char is complete
    if (hashmap2[char] === hashmap[char]) hashmap2.complete += 1;
    // check if all current chars are complete
    if (hashmap2.complete === hashmap2.total) {
      results.push(hashmap2.size);
      hashmap2 = {
        complete: 0,
        total: 0,
        size: 0
      };
    }
  }
  return results;
};