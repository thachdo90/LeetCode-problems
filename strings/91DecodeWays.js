/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: number
// C:
// E: starts with 0

// Strategy: recursion
// base case, s is length 1 return 1, s is length 0 return 1;
var numDecodings = function(s) {
  if (s[0] === '0') return 0;
  if (s.length <= 1) return 1;

  let firstTwo = Number(s.slice(0,2));
  let firstSum = numDecodings(s.slice(1))
  let secondSum = 0;
  if (firstTwo >= 10 && firstTwo <= 26) {
    secondSum = numDecodings(s.slice(2))
  }
  return firstSum + secondSum;
};

/**
 * @param {string} s
 * @return {number}
 */
// I: string
// O: number
// C:
// E: starts with 0

// Strategy: recursion
// base case, s is length 1 return 1, s is length 0 return 1;
var numDecodings = function(s) {
  let memo = {};

  const calculate = (index) => {
    if (s[index] === '0') return 0;
    if (index >= s.length - 1) return 1;
    if (memo[index] !== undefined) {
      return memo[index]
    } else {
      let firstTwo = Number(s.slice(index, index + 2));
      let firstSum = calculate(index + 1);
      let secondSum = 0;
      if (firstTwo >= 10 && firstTwo <= 26) {
        secondSum = calculate(index + 2)
      }
      let sum = firstSum + secondSum;
      memo[index] = sum;
      return sum;
    }
  }

  return calculate(0)
};