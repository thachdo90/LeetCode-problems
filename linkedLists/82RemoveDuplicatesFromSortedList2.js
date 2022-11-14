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
// I: list
// O: list
// C: sorted in ascending
// E: repeated numbers at the front, all are repeated? ending on a repeated number
var deleteDuplicates = function(head) {
  let falseHead = new ListNode();
  let pointer1 = falseHead;
  let pointer2 = head;
  let pointer3 = head;
  while (pointer3) {
    pointer3 = pointer3.next;
    if (pointer3 === null) {
      pointer1.next = pointer2;
      return falseHead.next;
    }
    if (pointer2.val !== pointer3.val) {
      pointer1.next = pointer2;
      pointer1 = pointer1.next;
      pointer2 = pointer3
    } else {
      while (pointer2.val === pointer3.val) {
        pointer3 = pointer3.next;
        if (pointer3 === null) {
          pointer1.next = pointer3;
          return falseHead.next;
        }
      }
      pointer2 = pointer3;
    }
  }
  return falseHead.next;
};