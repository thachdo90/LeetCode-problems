/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// I: root nodes of two binary trees
// O: root node of combined tree
// C:
// E: nodes that exist in one tree but counterpart is null, one node is null
// Strategy: use recursion
// base case: one node is null or both nodes are null
// add the values of the two current nodes, create a new node
  // if either root1 or root2 has a left child, recursively call function on those two nodes
  var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    let newNode = new TreeNode(root1.val + root2.val);
    if (root1.left || root2.left) newNode.left = mergeTrees(root1.left, root2.left);
    if (root1.right || root2.right) newNode.right = mergeTrees(root1.right, root2.right);
    return newNode;
  };