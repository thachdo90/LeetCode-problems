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
 * @param {number} k
 * @return {number}
 */
// I: root node of BST tree, number
// O: value of the kth smallest node
// C:
// E: k = n, k=1=n

// Strategy: use in order traversal and keep track of numbers in ascending order
var kthSmallest = function(root, k) {
  let values = [];
  let stack = [];
  do {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    values.push(root.val);
    if (values.length === k) return values[values.length - 1];
    root = root.right;
  } while (stack.length > 0 || root);

};