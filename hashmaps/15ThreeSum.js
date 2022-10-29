/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// I: array of ints
// O: array of arrays (triplets)
// C:
// E: no triplets, repeated triplets

// observations
// negative values and 0 values
// twosum stategy: linear time, so could we use something similar here and get it done in quadratic time?

// first attempt, don't worry about distinct values just yet

// strategy (cubic time, will probably exceed time limit)
// have find all possible cases with 3 pointers iterating through array
// optimization, the 2nd and 3rd pointer can be comebined into one iteration

// pseudocode (quadratic time)
// init results array
// have pointer1 iterate through each number
  // init total as value at pointer1 (but multiply it by -1 to flip its sign)
  // have a second pointer iterate through the rest of the elements, starting from pointer1 + 1
  // check if the remaindervalue = total - this value exists on the object
    //if it does, record the three elements to results
  // add value to object

// other strategy:
// sort array and have left and right pointer scan from outside in O(logn + n)
// now that this works, how do we ignore duplicates
// use nested object structure
// sort each triplet and store it in an object

var threeSum = function(nums) {
  let results = [];
  let archive = {};
  const isInArchive = (array) => {
    if (archive[array[0]] && archive[array[0]][array[1]] === array[2]) return true;
    return false;
  }
  const storeTriplet = (array) => {
    if (!archive[array[0]]) archive[array[0]] = {};
    archive[array[0]][array[1]] = array[2];
  }
  for (let pointer1 = 0; pointer1 < nums.length - 2; pointer1++) {
    let total = nums[pointer1] !== 0 ? nums[pointer1] * -1 : 0;
    let storage = new Set();
    for (let pointer2 = pointer1 + 1; pointer2 < nums.length; pointer2++) {
      let remaindervalue = total - nums[pointer2];
      // console.log('storage ', storage, ' value1 ', nums[pointer1], ' value 2 ', nums[pointer2]);
      if (storage.has(remaindervalue)) {
        let array = [nums[pointer1], total - nums[pointer2], nums[pointer2]].sort((a,b) => a - b);
        // console.log('array', array)
        if (!isInArchive(array)) {
          // console.log('storing ', array)
          storeTriplet(array)
          results.push(array)
        } else {
          // console.log('this array is already in archive ', array)
        }
      } else {
        storage.add(nums[pointer2])
      }
    }
  }
  // console.log(archive)
  return results;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// strategy:
// sort nums nlog(n) time
// iterate through nums, for each pass, have two pointers traversing the subarray to the right n^2
// keep a running set to check for duplicates
// total time O(nlog(n) + n^2) => O(n^2)
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let storage = new Set();
  let results = [];
  for (let p1 = 0; p1 < nums.length - 2; p1++) {
    let p2 = p1 + 1;
    let p3 = nums.length - 1;
    let target = nums[p1] === 0 ? 0 : nums[p1] * -1;
    if (nums[p1] > 0) break;

    while (p2 < p3) {
      if (nums[p2] > target / 2) break;
      let twoSum = nums[p2] + nums[p3];
      if (twoSum < target) {
        p2++;
      } else if (twoSum > target) {
        p3--;
      } else {
        let triplet = [nums[p1], nums[p2], nums[p3]];
        let tripletString = JSON.stringify(triplet);
        if (!storage.has(tripletString)) {
          results.push(triplet);
          storage.add(tripletString);
        }
        p3--;
      }
    }
  }
  return results;
};