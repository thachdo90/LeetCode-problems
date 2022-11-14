/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// I: linked list
// O: linked list
// C: can't change values
// E: odd number of nodes
// Strategy: use 3 pointers to make swap by insertion

var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  let falseHead = new ListNode();
  falseHead.next = head;
  let pointer1 = falseHead;
  let pointer2 = head;
  let pointer3 = head.next;
  while (pointer3) {
    pointer1.next = pointer3;
    pointer1 = pointer3.next;
    pointer3.next = pointer2;
    pointer2.next = pointer1;
    pointer1 = pointer2;
    pointer2 = pointer2.next;
    if (pointer2 === null) return falseHead.next;
    pointer3 = pointer2.next;
  }
  return falseHead.next;

};