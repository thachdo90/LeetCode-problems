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
 * @param {number} key
 * @return {TreeNode}
 */
// I: BST
// O: root node of the tree
// C: didn't say couldn't modify the value of the node, so this makes it easier
// E: deleting a leaf or deleting the root node, only one subtree can be "brought up"
// Strategy: BFS to find the key
// initate a function to reorganize the tree to delete the key

// INCOMPLETE SOLUTION
var deleteNode = function(root, key) {
  if (!root) return root;
  let fakeRoot = new TreeNode();
  fakeRoot.left = root;
  const swapAndDelete = (parent, child, relationship) => {
    // see if there's a left granchild, 
      // connect it to the right grandchild
  }
  let currArr = [fakeRoot];
  let children = [];
  while (currArr.length > 0) {
    for (let node of currArr) {
      if (node.left) {
        if (node.left.val === key) {
          console.log('parent ', node.val, ' child ', node.left.val)
          removeChild(node, node.left, 'left')
        }
        children.push(node.left);
      }
      if (node.right) {
        if (node.right) {
          if (node.right.val === key) {
            console.log('parent ', node.val, ' child ', node.right.val)
            removeChild(node, node.right, 'right');
          }
          children.push(node.right);
        }
      }
    }
    currArr = children;
    children = [];
  }
  return fakeRoot.left; 
};