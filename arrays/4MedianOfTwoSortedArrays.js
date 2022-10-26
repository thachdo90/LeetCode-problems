/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// I: two sorted arrays
// O: number (the median), with 5 decimal places?
// C: O(log(m + n))
// E:

// Observations:
  // arrays can be different sizes
  // Merging the arrays would result in O(m + n) time
  // given one sorted array, we can figure out its median in constant time based on its length

// Idea: use total length of the two arrays to figure out the count for 50% of the numbers. Then
// if it's an odd number, find the 50th percentile and get the next value
// if it's an even number, find the 50th percentile and the next number and average
// subproblem, find the 50th percentile index
// start both pointers at the end of the array and move the one that's greater in value
// we can easily calculate how many numbers are to the left using the current index

// If I were to do this in O(m + n) time, this would be easy
// start pointer1 and pointer2 at the beginning of their respective array
// advance the pointer that points to the lesser value of the two, until there's exactly 50% of element behind both pointers combined
// I'll build this slower method first and see if there's a way to optimize it
// focus on odd cases first, ignore even cases
// for odd cases, the sum of the two pointers should be equal to target = (m + n) /2 rounded down, return the lesser of the two values
// for even cases, get the two pointers to the target, take the lesser value, have each pointer look back one to find the left of the median (the greater value)

// first attempt
var findMedianSortedArrays = function(nums1, nums2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let length = nums1.length + nums2.length;
  let target = Math.floor(length / 2);
  let pointer1Leading = false;
  let pointer2Leading = false;
  while (pointer1 + pointer2 < target) {
    if (pointer1 === nums1.length - 1) {
      pointer2++;
      nums2[-1] = nums1[pointer1]
      pointer2Leading = true;
    } else if (pointer2 === nums2.length - 1) {
      pointer1++;
      nums1[-1] = nums2[pointer2]
      pointer1Leading = true;
    } else if(nums1[pointer1] <= nums2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  if (pointer1Leading) {
    pointer1 = pointer1 - 1;
    nums2 = nums1;
    pointer2 = pointer1;
  }
  if (pointer2Leading) {
    pointer2 = pointer2 - 1;
    nums1 = nums2;
    pointer1 = pointer2;
  }
  // handle odd cases
  if (length % 2 === 1) {
    console.log('got here', pointer1, pointer2)
    return Math.min(nums1[pointer1], nums2[pointer2])
  //handle even cases
  } else {
    console.log('pointer1: ', pointer1, ' pointer2: ', pointer2)
    let leftValue = Math.max(nums1[pointer1 - 1], nums2[pointer2 - 1])
    let rightValue = Math.min(nums1[pointer1], nums2[pointer2])
    console.log(leftValue, rightValue)
    return (leftValue + rightValue) / 2;
  }

};