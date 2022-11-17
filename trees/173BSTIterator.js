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
 */
 var BSTIterator = function(root) {
  this.orderedNodes = [Number.NEGATIVE_INFINITY]
  this.currentIndex = 0;
  let stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left
    }
    root = stack.pop();
    this.orderedNodes.push(root.val);
    root = root.right;
  }

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.currentIndex++;
  return this.orderedNodes[this.currentIndex];

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.orderedNodes[this.currentIndex + 1] !== undefined;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

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
 */
 var BSTIterator = function(root) {
  this.currentVal = Number.NEGATIVE_INFINITY;
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let node = this.stack.pop();
  this.currentVal = node.val;
  node = node.right;
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
  return this.currentVal;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */