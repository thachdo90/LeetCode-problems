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

// debugger;
rotate([0,1,2,3,4,5], 4);