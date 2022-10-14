// solve using combinatorics
// for given mxn, we'll need exactly m - 1 downs and n - 1 rights, but the order can differ
// we'll count how many combinations we can place these downs and rights
// using combinatorics, we can calculate this by (rights + downs) choose rights, the total number of moves and where to place the rights (which implies where we're placing the downs)
var uniquePaths = function(m, n) {
  let numOfRights = n - 1;
  let numOfDowns = m - 1;
  let totalMoves = numOfDowns + numOfRights;
  let factorials = [1, 1, 2, 6, 24];
  const factorial = (number) => {
      if (factorials[number]){
          return factorials[number]
      } else {
          while (factorials.length <= number) {
              let nextNum = factorials[factorials.length - 1] * factorials.length;
              factorials.push(nextNum);
          }
          return factorials[number];
      }
  }
  return factorial(totalMoves) / factorial(numOfDowns) / factorial(numOfRights)
};