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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// strategy: use recursion, build a helper function that compares two trees
var isSubtree = function(root, subRoot) {

  const isSame = (tree1, tree2) => {
      if (tree1 === null && tree2 === null) return true;
      if (tree1 === null) return false;
      if (tree2 === null) return false;
      if (tree1.val === tree2.val) {
          return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
      }
  }
  let array = [root];
  let children = [];
  while (array.length > 0) {
      for (let node of array) {
          if (isSame(node, subRoot)) return true;
          if (node.left) children.push(node.left);
          if (node.right) children.push(node.right);
      }
      array = children;
      children = [];
  }
  return false;
};