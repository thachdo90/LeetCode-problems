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

//  slow and fast pointer
var middleNode = function(head) {
  let falseHead = new ListNode();
  falseHead.next = head;
  let slowPointer = falseHead;
  let fastPointer = falseHead;
  do {
    slowPointer = slowPointer.next;
    if (!fastPointer.next || !fastPointer.next.next) return slowPointer;
    fastPointer = fastPointer.next.next;

  } while (fastPointer)
  return slowPointer

};