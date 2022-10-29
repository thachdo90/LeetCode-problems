/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// I: list node head, k int
// O: list node
// C: none
// E: k = 1, k = n

// edge: if k = 1; return as is

// strategy, use a stack to put groups of k nodes in, pop them out and link it
// init store
// init false head
// init currentNode
// init pointer1 and pointer2 pointing at head
// move pointer 2 k steps out, if it ever hits null, stop the iteration, watch out for the case where there are no left over nodes
// move pointer1 k steps out, each time, push node to store
// while there are nodes in the store,
  // pop last one out, link currentNode to it
  //advance currentNode

//return falseHead.next

var reverseKGroup = function(head, k) {
  let store = [];
  let falseHead = new ListNode();
  let currentNode = falseHead;
  let p1 = head;
  let p2 = head;
  while (p2) {
    for (let i = 0; i < k; i++) {
      p2 = p2.next;
      if (p2 === null) {
        if (i === k - 1) {
          continue;
        } else {
          currentNode.next = p1;
          return falseHead.next;
        }
      }
    }
    for (let i = 0; i < k; i++) {
      store.push(p1);
      p1 = p1.next;
    }
    while (store.length > 0) {
      let topNode = store.pop();
      currentNode.next = topNode;
      currentNode = currentNode.next;
      currentNode.next = null;
    }
  }
  return falseHead.next;
};