var productExceptSelf = function(nums) {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) product *= nums[j]
    }
    results.push(product)
  }
  return results;
};