var twoSum = function(nums, target) {
  let storage = {} //nums element: index
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (storage[diff] !== undefined) {
          return [storage[diff], i]
      } else {
          storage[nums[i]] = i;
      }
  }
};

module.exports = twoSum;