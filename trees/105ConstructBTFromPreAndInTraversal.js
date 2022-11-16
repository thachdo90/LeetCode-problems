/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Using recursion as described in solution

var buildTree = function(preorder, inorder) {
  let hashmap = {};
  for (let i = 0; i < inorder.length; i++) {
    hashmap[inorder[i]] = i;
  }
  const helper = (leftPre, rightPre, leftIn, rightIn) => {
    let node = new TreeNode(preorder[leftPre]);
    let LP1, RP1, LP2, RP2;
    let LI1, RI1, LI2, RI2;
    if (leftPre === rightPre) {
       return node;
    } else {
      // find Pre-order indices
      for (let i = leftPre + 1; i <= rightPre; i++) {
        if (hashmap[preorder[i]] < hashmap[preorder[leftPre]]) {
          LP1 = Math.min(LP1, i) || i;
          RP1 = Math.max(RP1, i) || i;
        } else {
          LP2 = Math.min(LP2, i) || i;
          RP2 = Math.max(RP2, i) || i;
        }
      }
      // Find inorder indices
      LI1 = leftIn;
      RI2 = rightIn;
      RI1 = hashmap[leftPre] - 1;
      LI2 = hashmap[leftPre] + 1
    }
    let leftTree = null;
    let rightTree = null;
    if (LP1 !== undefined) {
      leftTree = helper(LP1, RP1, LI1, RI1);
    }
    if (LP2 !== undefined) {
      rightTree = helper(LP2, RP2, LI2, RI2);
    }
    node.left = leftTree;
    node.right = rightTree;
    return node;
  }
  return helper(0, preorder.length - 1, 0, preorder.length - 1);
};