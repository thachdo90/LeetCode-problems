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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// I: array of ints
// O: array
// C: O(n) time, stretch O(1) space, not division operation
// E: 0, negative numbers

// if we could use division, we would take the product of the array and divide by each element
// observation, we need to iterate through all in order to get the product
// without division, we have to find some way to exclude a number as the product is built

// we could do this in quadratic time, for each element, we would multiple everything except itself

// iterate first pass, get product of array
// iterate second pass,
var productExceptSelf = function(nums) {
  let leftProduct = {'-1': 1};
  let rightProduct = {[nums.length]: 1};
  let product = 1;
  for (let left = 0; left <= nums.length - 1; left++) {
    product *= nums[left];
    leftProduct[left] = product;
  }
  product = 1;
  for (let right = nums.length - 1; right >= 1; right--) {
    product *= nums[right];
    rightProduct[right] = product;
  }
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let product = leftProduct[i - 1] * rightProduct[i + 1];
    results.push(product);
  }
  return results;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// I: array of ints
// O: array
// C: O(n) time, stretch O(1) space, not division operation
// E: 0, negative numbers

// if we could use division, we would take the product of the array and divide by each element
// observation, we need to iterate through all in order to get the product
// without division, we have to find some way to exclude a number as the product is built

// we could do this in quadratic time, for each element, we would multiple everything except itself

// iterate first pass, get product of array
// iterate second pass,
var productExceptSelf = function(nums) {
  let results = [];
  results[0] = 1;
  let product = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    product *= nums[i];
    results[i + 1] = product;
  }
  product = 1;
  for (let j = nums.length - 1; j > 0; j--) {
    product *= nums[j];
    results[j - 1] *= product;
  }
  return results;
};