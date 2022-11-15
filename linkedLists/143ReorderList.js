/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// I: linked list
// O: linked list
// C: don't modify values
// E: even number of nodes
// observation, it's kind of like folding the linked list onto itself
var reorderList = function(head) {
  let node = head;
  let stack = [];
  while (node) {
    stack.push(node);
    node = node.next;
  }
  node = head;
  while (node) {
    let endNode = stack.pop();
    if (node === endNode) {
      node.next = null;
      break;
    } else if (node.next === endNode) {
      node.next.next = null;
      break;
    } else {
      endNode.next = node.next;
      node.next = endNode;
      node = node.next.next;
    }
  }
  return head;
};