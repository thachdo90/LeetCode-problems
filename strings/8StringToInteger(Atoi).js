/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: number
// C: clamped to range [-2**31, 2**31 - 1]
// E: no characters, character is 0, leading 0's, - somewhere before the digit in different context

// strategy: iterate, store state for negative or positive, handle leading zeroes, store state for when a non-zero digit starts, convert number when reaching a character or reached the end.

// pseudocode
// init state for numberStarted, false
// init result to store characters, emptry string
// iterate through character
  //if character is not a white space, flip numberStarted to true
  //if character is '-' or '+'
    // if result string is empty, add this sign, continue
    // else process result and return, break
  //if numberStarted is true
    //if valid character, add to result string
    // if not a character, break the iteration
// try parsing result, NaN -> 0
// clamp values outside of range
var myAtoi = function(s) {
  let numberStarted = false;
  let result = '';
  for (let character of s) {
    if (character !== ' ') numberStarted = true;
    if (character === '-' || character === '+') {
      if (result.length === 0) {
        result += character;
        continue;
      } else {
        break;
      }
    }
    if (numberStarted) {
      if (character.charCodeAt() >= 48 ** character.charCodeAt() <= 57) {
        result += character;
      } else {
        break;
      }
    }
  }
  let intResult = parseInt(result)
  if (isNaN(intResult)) return 0;
  if (intResult < -1 * 2 ** 31) return -1 * 2 ** 31;
  if (intResult > 2 ** 31 - 1) return 2 ** 31 - 1;
  return intResult;

};