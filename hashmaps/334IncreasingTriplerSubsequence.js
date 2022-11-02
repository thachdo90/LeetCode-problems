/**
 * @param {number[]} nums
 * @return {boolean}
 */

// I: array of ints
// O: boolean
// C:
// E: all the same value, length < 3

// observations:
// as we iterate through the array, we might have to start over with a new minimum

// Idea: Brute force strategy: start with every element and see if two more elements can be found O(n^3)
// Idea: What if we sorted this array and tracked its index
// Idea: time O(n^2)
  // iterate through nums, each time, process the number in a hashmap like so
  // the key of the hashmap will represent the highest number in that set, the value will be the count of elements in that set
  // if the current number is greater than the key, then we can get increment the value by 1 and create a new key value pair
  // if the count reaches 3, return true immediately,
  // else, check if the key value already exist and only update if it's a higher count
  var increasingTriplet = function(nums) {
    let hashmap = {};
    for (let number of nums) {
      let count = 1;
      for (let [key, value] of Object.entries(hashmap)) {
        if (number > key) count = Math.max(value + 1, count);
      }
      if (count >= 3) return true;
      hashmap[number] = Math.max(hashmap[number], count) || count;
    }
    return false;
  };

  var increasingTriplet = function(nums) {
    let triplet = []
    for (let number of nums) {
      if (triplet[0] === undefined) {
        triplet[0] = number;
      } else {
        if (number < triplet[0]) {
          triplet[0] = number
        } else if (number > triplet[0]) {
          if (triplet[1] === undefined) {
            triplet[1] = number;
          } else if (number < triplet[1]) {
            triplet[1] = number;
          } else if (number > triplet[1]) {
            return true;
          }
        }
      }
    }
    return false;
  };