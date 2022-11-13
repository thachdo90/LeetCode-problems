/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// I: two lists
// O: list
// C: lists are stored in reverse order
// E: lists of different sizes
var addTwoNumbers = function(l1, l2) {
  let falseHead = new ListNode();
  let current = falseHead;
  let carry = 0;
  while (l1 || l2) {
    let sum;
    if (l1 === null) {
      sum = l2.val + carry;
      l2 = l2.next;
    } else if (l2 === null) {
      sum = l1.val + carry;
      l1 = l1.next;
    } else {
      sum = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    }
    let digit = sum % 10;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(digit);
    current = current.next;
  }
  if (carry > 0) current.next = new ListNode(carry)

  return falseHead.next;
};