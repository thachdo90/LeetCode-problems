/**
 * @param {number} num
 * @return {boolean}
 */
// I: number
// O: boolean
// C: none
// E: 1, 2, 3, perfect square
//  strategy: iterate through all integers and add the divisor and the quotient to a running sum
// optimization: iterate only up to half (this is already caught by the optimization below with divisor being lesson than quotient)
// optimization: add both the divisor and the quotient since the quotient is also a divisor, stop the iteration whenever the divisor is larger than the quotient
// return true if the sum - num is equal to the num

var checkPerfectNumber = function(num) {
  let divisor = 1;
  let sum = 0;

  while (divisor <= num / 2) {
    let quotient = num / divisor;
    if (divisor >= quotient) break;
    if (num % divisor === 0) {
      sum += divisor + quotient;
    }
    divisor++;
  }
  return sum - num === num;
};