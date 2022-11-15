/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// I: array of ints
// O: array of two elements, start and end index
// C: log(n) time
// E: empty array, targets starts at the beginning or the end

// strategy: binary search, conduct two binary searches, one for the start and one for the end?
// optimization: remember the last known number for upper bound so we don't have to start from the end
var searchRange = function(nums, target) {
  let LB = 0;
  let UB = nums.length - 1;
  let MP = Math.floor((LB + UB) / 2);
  let result = [-1, -1];
  while (MP !== LB) {
    let midVal = nums[MP];
    if (midVal >= target) {
      UB = MP;
    } else {
      LB = MP;
    }
    MP = Math.floor((LB + UB) / 2);
  }
  if (nums[LB] === target) {
    result[0] = LB;
  } else if (nums[UB] === target) {
    result[0] = UB;
  } else {
    return result;
  }
  UB = nums.length - 1;
  MP = Math.floor((LB + UB) / 2);
  while (MP !== LB) {
    let midVal = nums[MP];
    if (midVal <= target) {
      LB = MP;
    } else {
      UB = MP;
    }
    MP = Math.floor((LB + UB) / 2);
  }
  if (nums[UB] === target) {
    result[1] = UB;
  } else if (nums[LB] === target) {
    result[1] = LB;
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// I: array of ints
// O: array of two elements, start and end index
// C: log(n) time
// E: empty array, targets starts at the beginning or the end

// strategy: binary search, conduct two binary searches, one for the start and one for the end?
// optimization: remember the last known number for upper bound so we don't have to start from the end
var searchRange = function(nums, target) {
  let LB = 0;
  let UB = nums.length - 1;
  let MP = Math.floor((LB + UB) / 2);
  let result = [-1, -1];
  let lastUB = nums.length - 1;
  if (nums[LB] === target) {
    result[0] = LB;
  } else {
    while (MP !== LB) {
      let midVal = nums[MP];
      if (midVal > target) {
        lastUB = MP;
        UB = MP;
      } else if (midVal === target) {
        UB = MP;
      } else {
        LB = MP;
      }
      MP = Math.floor((LB + UB) / 2);
    }
    if (nums[UB] === target) {
      result[0] = UB;
    } else {
      return result;
    }
  }
  UB = lastUB;
  if (nums[UB] === target) {
    result[1] = UB;
    return result;
  }
  MP = Math.floor((LB + UB) / 2);
  while (MP !== LB) {
    let midVal = nums[MP];
    if (midVal <= target) {
      LB = MP;
    } else {
      UB = MP;
    }
    MP = Math.floor((LB + UB) / 2);
  }
  result[1] = LB;
  return result;
};