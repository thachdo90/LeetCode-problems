/**
 * @param {string} s
 * @return {string}
 */
// I: string
// O: string
// C:
// E: different answers possible

// strategy: iterate through string, use a stack to keep track of open parentheses
// if we encounter an open parentheses, add its index to the stack
// if we encounter a closed parentheses, check with the stack, if there's an open parentheses available, pop it out
  // else, delete this close parentheses
// after one pass through the string, if the stack has open parentheses, which hasn't been closed, delete them from the string
var minRemoveToMakeValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        s = s.slice(0, i) + s.slice(i + 1, s.length);
        i--;
      }
    }
  }
  while (stack.length > 0) {
    let index = stack.pop();
    s = s.slice(0, index) + s.slice(index + 1, s.length);
  }
  return s;

};