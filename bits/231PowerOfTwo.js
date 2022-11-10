/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    } else {
      n = n / 2;
    }
  }
  return n === 1;

};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  let binString = n.toString(2);
  if (binString.length > 1) {
    for (let i = 1; i < binString.length; i++) {
      if (binString[i] !== '0') return false;
    }
  }
  return binString[0] === '1';
};