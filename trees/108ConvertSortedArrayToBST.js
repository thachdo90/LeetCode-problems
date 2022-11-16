/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// I: array sorted in strictly increasing order
// O: root node of tree that's height balanced
// C:
// E:
// get the middle element and use recursion on the remaining left subarray and remaining right subarray
var sortedArrayToBST = function(nums) {
  const generateTree = (startIndex, endIndex) => {
    if (startIndex === endIndex) {
      return new TreeNode(nums[startIndex]);
    }
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    let midValue = nums[midIndex];
    let midNode = new TreeNode(midValue);
    if (midIndex === startIndex) {
      midNode.left = null;
    } else {
      midNode.left = generateTree(startIndex, midIndex - 1);
    }
    midNode.right = generateTree(midIndex + 1, endIndex);

    return midNode;
  }
  return generateTree(0, nums.length - 1);
};