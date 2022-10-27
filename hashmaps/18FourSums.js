/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// cubic time with optimizations, break points to stop iterating
// also need to store previously seen values to avoid duplicates
// is there a way to have p2, p3, p4 move simultaneously?

// idea is there a to find sums of pairs O(n^2) and check for another pair sum?

// pseudocode:
// init count
// init storage, this will store sums of pairs as keys and the tuple that make up that sum
// init archive, set()
// p1 iterate through nums
  //p2 iterate through nums
    // calculate remaining sum, see if it exists in storage
    // if it exists, this is a potential quadruplet.
    // generate the array of quadruplet, sort it, stringify it
    //check if this string is already in archive
      // check if there are enough resources to get this quadruplet in count
    // if not, add it archive and results
    // add pair to storage
// return results
var fourSum = function(nums, target) {
  let count = {};
  let storage = {};
  let archive = new Set();
  let results = []

  nums.forEach(element => count[element] = (count[element] || 0) + 1);

  const hasEnoughCount = (array) => {
    let countCopy = JSON.parse(JSON.stringify(count));
    for (let item of array) {
      if (countCopy[item]) {
        countCopy[item] -= 1;
      } else {
        return false;
      }
    }
    return true;
  }


  for (let p1 = 0; p1 < nums.length - 1; p1++) {
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      let pairSum = nums[p1] + nums[p2]
      let remainingSum = target - pairSum;
      // look in storage for complementary pairs
      if (storage[remainingSum] !== undefined) {
        let possiblePairs = storage[remainingSum];
        for (let pair of Object.values(possiblePairs)) {
          let quadruplets = pair.concat([nums[p1], nums[p2]]).sort((a, b) => a - b);
          let quadString = JSON.stringify(quadruplets);
          if (!archive.has(quadString) && hasEnoughCount(quadruplets)) {
            // process new pair
            archive.add(quadString)
            results.push(quadruplets);
          }
        }
      }
      let currentPair = [nums[p1], nums[p2]];
      let pairString = JSON.stringify(currentPair)
      if (storage[pairSum] === undefined) storage[pairSum] = {};
      if (storage[pairSum][pairString] === undefined) storage[pairSum][pairString] = currentPair;
    }
  }
  // console.log('count ', count)
  // console.log('storage ', storage)
  // console.log('archive ', archive)
  return results;

};