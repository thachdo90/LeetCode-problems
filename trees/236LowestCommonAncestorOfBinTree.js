/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// I: root node of binary tree, p node and q node
// O: node, common ancestor
// C:
// E:

// Obs: there will always be a common ancestor (root node)
// had to look at solution, this was a tough one, but the strategy (recursion) makes sense for the most part
var lowestCommonAncestor = function(root, p, q) {
  let result;
  const searchTree = (root) => {
    let mid, left, right;
    if (root === p || root === q) {
      mid = true;
    } else {
      mid = false;
    }
    if (root.left) {
      left = searchTree(root.left)
    } else {
      left = false;
    }
    if (root.right) {
      right = searchTree(root.right)
    } else {
      right = false;
    }
    if (mid + left + right >= 2) {
      console.log('got here');
      result = root;
    };
    console.log(mid || left || right)
    return mid || left || right;
  }
  searchTree(root);
  return result;

};