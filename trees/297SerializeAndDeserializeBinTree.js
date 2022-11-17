/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// Idea1: level order, putting nulls where there is no node
// Idea2: providing a preorder and inorder array that can be used to reconstruct the tree
// Idea3: using a nested array to keep track of children nodes, we can serialize it as a JSON string
var serialize = function(root) {
  const deconstruct = (root) => {
    if (!root) return [];
    let array = [root.val]
    let leftArray = [];
    let rightArray = [];
    if (root.left) {
      leftArray = deconstruct(root.left);
    }
    if (root.right) {
      rightArray = deconstruct(root.right);
    }
    array.push([leftArray, rightArray]);
    return array;
  }
  let deconstructedArray = deconstruct(root);
  console.log(deconstructedArray);
  return JSON.stringify(deconstructedArray);

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = JSON.parse(data);
  const constructNode = (arr) => {
    if (arr.length === 0) return null;
    let parentNode = new TreeNode(arr[0]);
    let leftTree = constructNode(arr[1][0]);
    let rightTree = constructNode(arr[1][1]);
    parentNode.left = leftTree;
    parentNode.right = rightTree;
    return parentNode;
  }
  return constructNode(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */