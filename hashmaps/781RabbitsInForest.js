/**
 * @param {number[]} answers
 * @return {number}
 */

//  I: array of ints
// O: int
// C:
// E:

// observation: same answers could be grouped into groups of size (a + 1) where a is the answer

// strategy: iterate through answers, store answers in object. This problem should be able to be solved in O(N) time
// how to store in object. Example: If we first encounter an answer of 5, we'll store {5: 5}, the value in this object denotes that there needs to be 5 other rabits who also answered 5, so the next time we see 5, we'll decrement, if this value ever reaches 0, that means we'll have to start a new color and refresh the count back up to 5
// ex: [5, 5, 5, 5, 5, 5, 5]
// i = 0 starts the count at 5
// i = 5 decrements the count to 0
// i = 6 restarts the count to 5
// at the end, return the length of the array (encountered rabbits) and sum of the values in storage (unseen rabbits that needs to be grouped up)

// pseudocode
// init colorCount = {}
// iterate through answers
  // if this answer is new, init it in colorCount
  // else,
    //if the answer is 0
      //refresh count
    //else decrement the count
//return answers length + sum of values in colorCount

var numRabbits = function(answers) {
  let colorCount = {};
  for (let answer of answers) {
    // check if this catches both undefined and 0
    if (!colorCount[answer]) {
      colorCount[answer] = answer;
    } else {
      colorCount[answer] -= 1;
    }
  }
  return answers.length + Object.values(colorCount).reduce((acc, item) => acc + item, 0);
};