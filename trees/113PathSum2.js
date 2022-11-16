/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
// I: root node of tree
// O: array of arrays, each inner array represents the values of root to leaf path
// C: node values and target sum can be negative so we must check every possible leaf
// E: cases where there's no path, or tree is null

// strategy: recursion
// base case: reached a leaf
var pathSum = function(root, targetSum) {
  let result = [];
  if (!root) return result;
  const search = (root, sum, path) => {
    // base case: reached a leaf
    path = path.slice();
    path.push(root.val);
    if (!root.left && !root.right) {
      if (root.val === sum) {
        result.push(path);
      }
    } else {
    // recurse on child nodes
      if (root.left) {
        search(root.left, sum - root.val, path)
      }
      if (root.right) {
        search(root.right, sum - root.val, path)
      }
    }
  }
  search(root, targetSum, []);
  return result;

};