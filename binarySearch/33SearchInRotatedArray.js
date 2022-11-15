/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// I: possible rotated array
// O: number, -1 or the index of the target found
// C: log(n)
// E: array of length 1, array that's not rotated
// Strategy: binary search
// when we're looking the LB, MP, and UB, there are a few cases to consider
// LB to MP is increasing
  // if target is within this range, then make MP the new UB
  // otherwise, make MP the new LB
// LB to MP is decreasing
  // the target COULD be in this range, so search it, make MP the new UB
// MP to UB is increasing
  // if target is within this range, then make MP the new LB
  // else, make MP the new UB
// MP to UB is decreasing
  // target could be in this range, make MP the new LB
  var search = function(nums, target) {
    let LB = 0;
    let UB = nums.length - 1;
    const midPoint = (LB, UB) => Math.floor((LB + UB) / 2);
    let MP = midPoint(LB, UB);

    if (nums[LB] === target) return LB;
    if (nums[UB] === target) return UB;
    while (MP !== LB && MP !== UB) {
      let midVal = nums[MP];
      if (midVal === target) return MP;
      if (nums[LB] < nums[MP] && (target >= nums[LB] && target <= nums[MP])) {
        UB = MP;
      } else if (nums[MP] < nums[UB] && (target >= nums[MP] && target <= nums[UB])) {
        LB = MP;
      } else if (nums[LB] > nums[MP]) {
        UB = MP;
      } else {
        LB = MP;
      }
      MP = midPoint(LB, UB)
    }
    if (nums[LB] === target) return LB;
    if (nums[UB] === target) return UB;
    return -1;

  };