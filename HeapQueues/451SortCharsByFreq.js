/**
 * @param {string} s
 * @return {string}
 */
// I: string
// O: string
// C: lower and upper case are treated as different
// E:

// strategy: store letters and frequencies in a hashmap
// convert hasmap to array and sort it
var frequencySort = function(s) {
  let hashmap = {};
  for (let char of s) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }
  let letterFreqs = Object.entries(hashmap);
  console.log(letterFreqs);
  letterFreqs.sort((a, b) => b[1] - a[1]);
  let result = '';
  for (let letter of letterFreqs) {
    for (let count = 0; count < letter[1]; count++) {
      result += letter[0];
    }
  }
  return result;
};