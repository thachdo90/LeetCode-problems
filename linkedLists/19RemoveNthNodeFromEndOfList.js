/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//  I: list node
// O: int
// C:
// E: 1 node, removing the only one node, removing the first node, removing the last node

// strategy: have 3 pointers, one staying at the head to return and to remove the first node,
// p2 and p3 will find what node to remove, p3 will measure the length of the linked list, p2 will go after
// time O(2n) => O(n)
var removeNthFromEnd = function(head, n) {
  let falseHead = new ListNode();
  falseHead.next = head;
  let p1 = falseHead;
  let p2 = falseHead;
  let p3 = falseHead;
  let length = 0;
  while (p3.next) {
    p3 = p3.next;
    length++;
  }
  let steps = length - n;
  while (steps > 0) {
    p2 = p2.next
    steps--;
  }
  p2.next = p2.next.next;

  return falseHead.next;
};