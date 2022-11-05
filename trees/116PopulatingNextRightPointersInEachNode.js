/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
// I: perfect binary tree
// O: return root node of this tree;
// C:
// E:
// strategy: solve iteratively using arrays as additional structure
// init two arrays, current and children
// store root node in current
// while there's something in the current array to process
  // iterate through current array,
    // link it to the next node, or null if none
    // add its children to the children array (left, right in order)
  // replace current array with children array
  // clear children array
/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if (!root) return null;
  let current = [root];
  let children = [];
  while (current.length > 0) {
    for (let i = 0; i < current.length; i++) {
      current[i].next = current[i + 1] || null;
      if(current[i].left) {
        children.push(current[i].left)
        children.push(current[i].right)
      }
    }
    current = children;
    children = [];
  }
  return root;
};