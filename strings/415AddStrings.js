/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// I: 2 strings, representing numbers
// O: string representing the sum
// C: no built in library for handling large numbers, can't convert input to integers directly
// E: inputs are both 0, one input is longer
var addStrings = function(num1, num2) {
  let carry = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let result = '';
  let digit1, digit2, sum;
  while (p1 >= 0 || p2 >= 0) {
    // optimize by slicing off the string if one string is longer than the other
    digit1 = parseInt(num1[p1]) || 0;
    digit2 = parseInt(num2[p2]) || 0;
    sum = digit1 + digit2 + carry;
    carry = Math.floor((digit1 + digit2 + carry) / 10);
    result = sum % 10 + result;
    p1--;
    p2--;
  }
  if (carry > 0) result = carry + result;
  return result;
};