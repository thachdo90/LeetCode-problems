/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of numbers
// O: number
// C: log(n) time
// E: peaks at the ends of the array, multiple peaks, array of length 1 or 2

// strategy: iterate through array, compare to left and right elements, this is O(n) time though
// to get O(logn), we can try some sort of divide and conquer strategy
// create a helper function that does the following
  // takes start and end index
  // calculates the middle, check surrounding value
  // recurse with ranges [lower, middle], [middle, upper]
  // base case, return nothing if the two ranges are 1 or 0 away
  var findPeakElement = function(nums) {
    // check edge cases
    if (nums.length === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

    const search = (startIndex, endIndex) => {
      let midIndex = Math.floor((startIndex + endIndex) / 2);
      if (nums[midIndex] > nums[midIndex - 1] && nums[midIndex] > nums[midIndex + 1]) {
        return midIndex;
      } else {
        if (midIndex - startIndex > 1) {
          let leftResult = search(startIndex, midIndex);
          if (leftResult !== undefined) return leftResult;
        }
        if (endIndex - midIndex > 1) {
          let rightResult = search(midIndex, endIndex);
          if (rightResult !== undefined) return rightResult;
        }
      }

    }

    return search(0, nums.length - 1);
  };