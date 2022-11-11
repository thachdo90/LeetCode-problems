/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let result = 0;
  let binString = n.toString(2);
  while (binString.length < 32) {
    binString = '0' + binString;
  }
  let power = 0;
  for (let char of binString) {
    if (char === '1') {
      console.log('add', 2**power, 'at power', power)
      result += 2 ** power;
    }
    power++;
  }
  return result;
};