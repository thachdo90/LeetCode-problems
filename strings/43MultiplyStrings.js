/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// I: two strings
// O: string
// C: can't convert inputs directly to integers
// E:
// Strategy: iterate through num1 right to left, convert digit to int and multiply it to num2, add result to running total

var multiply = function(num1, num2) {
  let total = '0';
  const addStrings = (num1, num2, carry = 0) => {
    let result = '';
    let pointer1 = num1.length - 1;
    let pointer2 = num2.length - 1;
    while (pointer1 >= 0 || pointer2 >= 0) {
      let digit1 = parseInt(num1[pointer1]) || 0
      let digit2 = parseInt(num2[pointer2]) || 0
      let sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = sum % 10 + result;
      pointer1--;
      pointer2--;
    }
    if (carry > 0) {
      result = carry + result;
    }
    return result;
  }

  for (let i = 0; i < num1.length; i++) {
    let digit1 = parseInt(num1[num1.length - 1 - i]);
    if (digit1 === 0) continue;
    for (let j = 0; j < num2.length; j++) {
      let digit2 = parseInt(num2[num2.length - 1 - j]);
      if (digit2 === 0) continue;
      let sum = digit1 * digit2 + '';
      for (let k = 0; k < i + j; k++) {
        sum += '0';
      }
      total = addStrings(total, sum);
    }
  }
  return total;
};