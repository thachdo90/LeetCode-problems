/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// strategy: use a hashmap
var getIntersectionNode = function(headA, headB) {
  let set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return null

};

var getIntersectionNode = function(headA, headB) {
  let lengthA = 1;
  let lengthB = 1;
  let pointerA = headA;
  while (pointerA.next) {
    pointerA = pointerA.next;
    lengthA++;
  }
  let pointerB = headB;
  while (pointerB.next) {
    pointerB = pointerB.next;
    lengthB++;
  }
  pointerA = headA;
  pointerB = headB;
  if (lengthA < lengthB) {
    for (let count = 1; count <= lengthB - lengthA; count++) {
      pointerB = pointerB.next;
    }
  } else if (lengthA > lengthB) {
    for (let count = 1; count <= lengthA - lengthB; count++) {
      pointerA = pointerA.next;
    }
  }
  while (pointerA) {
    if (pointerA === pointerB) {
      return pointerA;
    } else {
      pointerA = pointerA.next;
      pointerB = pointerB.next;
    }
  }
  return null;

};