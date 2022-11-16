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
 * @return {number[]}
 */
// I: root node of tree
// O: values
// C:
// E: right subtree is shorter than left subtree
// strategy: use level order and get only the right-most value
var rightSideView = function(root) {
  let result = [];
  if (!root) return result;
  let currArr = [root];
  let children = [];
  while (currArr.length > 0) {
    result.push(currArr[currArr.length - 1].val);
    for (let node of currArr) {
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    currArr = children;
    children = [];
  }
  return result;
};