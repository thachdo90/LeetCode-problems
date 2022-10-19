// I: array of integers
// O: numeric value, sum of all subarray ranges
// C: none
// E: array containing the same element, array containing 1 element
// info: subarray is CONTIGUOUS
// observations: subarrays are not duplicated, however, they may contain duplicated elements
// subarrays of 1 element will always yield 0
// Strategy:
// Sliding window using pointers for each size of subarrays O(n^2) time
// challenge, tracking min/max so we don't have to iterate through the subarray everytime, which increases time complexity
// for now, I'll make a helper function that iterates through the subarray to calculate the range

const sumRanges = (nums) => {
  let total = 0;

  const processRange = (subArray) => {
    let min, max;
    for (let element of subArray) {
      min = (Math.min(element, min) || element);
      max = (Math.max(element, max) || element);
    }
    return max - min;
  }

  for (let size = 2; size <= nums.length; size++) {
    for (let i = 0; i <= nums.length - size; i++) {
      let sum = processRange(nums.slice(i, i + size));
      total += sum;
    }
  }

  return total;
}

// let array = [0,1,2,3]
// console.log(array.slice(0, 2))


let input;

// TEST 1
input = [1,2,3];
console.log(sumRanges(input), ' should be ', 4)

// TEST 2
input = [1,3,3];
console.log(sumRanges(input), ' should be ', 4)

// TEST 3
input = [4, -2, -3, 4, 1]
console.log(sumRanges(input), ' should be ', 59)