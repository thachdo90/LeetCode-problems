/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// I: list
// O: node where cycle begins or null
// C: don't modify linked list
// E: link starts at 0
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// strategy: have a fast and slower pointer iterate through the lists, while storing nodes in their separate stacks
// compare the two nodes, if they ever match, then we found a cycle, but we don't know where the beginning node was
// but now we can track the stack, which should be the same until they diverge
// if l2 ever hits null, return null, there is no cycle
var detectCycle = function(head) {
  if (head === null) return null;
  let stack1 = [head];
  let stack2 = [head];
  let pointer1 = head;
  let pointer2 = pointer1;
  while (pointer2.next && pointer2.next.next) {
    pointer2 = pointer2.next;
    stack2.push(pointer2);
    pointer2 = pointer2.next;
    stack2.push(pointer2);
    pointer1 = pointer1.next;
    stack1.push(pointer1);
    if (pointer1 === pointer2) {
      let node1 = stack1.pop();
      let node2 = stack2.pop();
      let commonNode = node1;
      while (stack1.length > 0 || stack2.length > 0) {
        node1 = stack1.pop();
        node2 = stack2.pop();
        if (node1 !== node2) {
          return commonNode;
        } else {
          commonNode = node1;
        }
      }
      return commonNode;
    }
  }
  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// I: list
// O: node where cycle begins or null
// C: don't modify linked list
// E: link starts at 0
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// strategy: have a fast and slower pointer iterate through the lists, while storing nodes in their separate stacks
// compare the two nodes, if they ever match, then we found a cycle, but we don't know where the beginning node was
// but now we can track the stack, which should be the same until they diverge
// if l2 ever hits null, return null, there is no cycle
var detectCycle = function(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return head;
    } else {
      set.add(head);
      head = head.next;
    }
  }
  return null;
};