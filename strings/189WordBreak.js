/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// I: string and array (dictionary)
// O: Boolean
// C:
// E:

// Strategy: iterate through dictionary to create hashmap
// use recursion to breakdown the size of the string
// base case: if string is empty, return true, if we go to the end of string and it's not in the dictionary, return false

var wordBreak = function(s, wordDict) {
  let dict = new Set (wordDict);

  const process = (word) => {
    if (word.length === 0) return true;
    let string = '';
    for (let i = 0; i < word.length; i++) {
      string += word[i];
      if (dict.has(string)) {
        if (process(word.slice(i + 1))) return true;
      }
    }
    return false;
  }

  return process(s);
};