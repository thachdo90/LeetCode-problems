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
 * @return {number[][]}
 */
// I: Root node of tree
// O: array of arrays, representing the node values
// C:
// E: Root is null or tree has only 1 node
// strategy, just proceed as normal but use array reverse when it's time to reverse
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let forward = true;
  let result = [];
  let currArr = [root];
  let children = [];
  while (currArr.length > 0) {
    for (let i = 0; i < currArr.length; i++) {
      let node = currArr[i];
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    let values = [];
    if (forward) {
      for (let i = 0; i < currArr.length; i++) {
        values.push(currArr[i].val)
      }
    } else {
        for (let i = currArr.length - 1; i >= 0; i--) {
        values.push(currArr[i].val)
      }
    }
    result.push(values);
    currArr = children;
    children = [];
    forward = !forward;
  }

  return result;
};