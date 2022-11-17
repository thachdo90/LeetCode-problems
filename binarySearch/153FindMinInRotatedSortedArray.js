/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let LB = 0;
  let UB = nums.length - 1;
  let min = Math.min(nums[LB], nums[UB])

  const midPoint = (LB, UB) => Math.floor((LB + UB) / 2);
  const searchRange = (start, end) => {
    let MP = midPoint(start, end);
    if (MP === start) return;
    min = Math.min(min, nums[MP]);
    if (nums[start] > nums[MP]) {
      searchRange(start, MP)
    } else {
      searchRange(MP, end)
    }
  }
  searchRange(LB, UB);

  return min
};