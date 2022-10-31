// this doesn't work, modular arithmetic is tricky, didn't behave how I wanted it to, but it could achieve linear time
var rotate = function(nums, k) {
  if (k === nums.length) return nums;
  k = k % nums.length;
  const swap = (startIndex, steps) => {
    let pointer = startIndex;
    let prevValue = nums[pointer];
    let nextValue = nums[pointer];
    while (steps >= 0) {
      pointer = (pointer + k) % nums.length;
      nextValue = nums[pointer]
      nums[pointer] = prevValue;
      prevValue = nextValue;
      console.log(nums)
      steps--;
    }
  }
  if (nums.length % k === 0) {
    let steps = nums.length / k;
    for (let i = 0; i < k; i++) {
      swap(i, steps);
    }
  } else {
    swap(0, nums.length);
  }

  return nums;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  I: array of ints
// O: array of ints
// C: change in place, do not use new array
// E: k > nums.length

// obs: if k === nums.length, nothing changes
// obs: if k > nums.length, then k = k modulo nums.length

// using reverse strategy
var rotate = function(nums, k) {
  if (k === nums.length) return nums;
  k = k % nums.length;
  nums.reverse();
  const reverse = (startIndex, endIndex, array) => {
    while (startIndex < endIndex) {
      let temp = nums[startIndex];
      nums[startIndex] = nums[endIndex];
      nums[endIndex] = temp;
      startIndex++;
      endIndex--;
    }
  }
  let p1 = 0;
  let p2 = k - 1;
  reverse(p1, p2, nums);
  p1 = k;
  p2 = nums.length - 1;
  reverse(p1, p2, nums);

  return nums;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  I: array of ints
// O: array of ints
// C: change in place, do not use new array
// E: k > nums.length

// obs: if k === nums.length, nothing changes
// obs: if k > nums.length, then k = k modulo nums.length

var rotate = function(nums, k) {
  if (k === nums.length) return nums;
  k = k % nums.length;
  let startIndex = 0;
  let pointer = startIndex;
  let steps = nums.length - 1;
  let prevValue = nums[pointer];
  let nextValue = nums[pointer];
  while (steps >= 0) {
    pointer = (pointer + k) % nums.length;
    steps--;
    nextValue = nums[pointer];
    nums[pointer] = prevValue;
    prevValue = nextValue;
    // console.log(nums);
    if (pointer === startIndex) {
      pointer++;
      startIndex = pointer;
      prevValue = nums[pointer]
    }
  }

  return nums;
};