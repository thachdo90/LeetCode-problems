/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// I: head of a list
// O: head of copied list
// C: none
// E: empty list

// strategy:
// traverse original list twice
// first pass: create a copy with the normal next property
  // store a maping of original:copy node in an object (mirror)
// second pass:
  // for each random connection: look up the copied node in the mirror object
// FIX: an object does not work, instead, create a new mirror property to map those nodes
var copyRandomList = function(head) {
  if (!head) {
      return null;
  }
  let pointer1 = head;
  let head2 = new Node(head.val);
  let pointer2 = head2;
  pointer1.mirror = pointer2;
  while (pointer1.next) {
      pointer1 = pointer1.next;
      pointer2.next = new Node(pointer1.val);
      pointer2 = pointer2.next;
      pointer1.mirror = pointer2;
  }
  pointer2.next = null;

  pointer1 = head;
  pointer2 = head2;
  while (pointer1) {
      if (pointer1.random !== null) {
          let mirroredNode = pointer1.random.mirror;
          pointer2.random = mirroredNode;
      } else {
          pointer2.random = null;
      }
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
  }

  return head2
};