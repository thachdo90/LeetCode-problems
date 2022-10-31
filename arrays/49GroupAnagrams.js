/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// I: array of strings
// O: array of array of strings
// C:
// E:

// ideas;
// convert each word to array, sort that array, stringifiy it, and store the stringified version in a hashmap
// at the end, traverse the hashmap to get the results
// the key of the hashmap will be the stringified version of the sorted array of characters. All anagrams will have the exact same key because the characters are sorted.
// time: n*nlogn, traversing each word and sorting its characters
var groupAnagrams = function(strs) {
  let hashmap = {}
  for (let word of strs) {
    let key = JSON.stringify(word.split('').sort())
    if (!hashmap[key]) hashmap[key] = [];
    hashmap[key].push(word);
  }
  let results = [];
  for (value of Object.values(hashmap)) {
    results.push(value);
  }
  return results;
};