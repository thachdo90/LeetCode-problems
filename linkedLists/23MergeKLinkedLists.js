/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// I: array of linked lists
// O: one linked list that's merged
// C:
// E: empty array, empty linked list, linked lists of different sizes

// Idea: create a function that sorts the array of linked lists based on the value of the head, descending order
// that way, the last element in the array will always be next (the smallest)
// when linking to this list, we'll link to its head, and move its pointer up, if it's null, we'll pop it out of the array

// pseudocode
// init false head
// init current head
// while the lists is not empty
  // sort it
  // pop out the last list in the array
  // link the current head to the head of the last list
  // move the pointer in the last list up, if it's not null, push it back into the array
// return falseHead.next
// time complexity: O(k*ki*nlog(k)) where k is the number of lists in the array, ki is the length of each list, and log(k) because we're sorting it every time

//super slow but got the job done!
var mergeKLists = function(lists) {
  lists = lists.filter(node => node !== null)
  let falseHead = new ListNode();
  let current = falseHead;
  while (lists.length > 0) {
    lists.sort((a, b) => b.val - a.val)
    let lastNode = lists.pop();
    if (lastNode) {
      current.next = lastNode;
      current = current.next;
      if (lastNode.next) {
        lastNode = lastNode.next;
        lists.push(lastNode)
      }
    }
  }
  return falseHead.next;
};

// slightly improved time complexity from n*n*log(n) to n^2
var mergeKLists = function(lists) {
  let falseHead = new ListNode();
  let current = falseHead;
  let nextNode;
  let finishedIteration = false;

  while (finishedIteration === false) {
    let index;
    finishedIteration = true;
    nextNode = undefined;
    for (let i = 0; i < lists.length; i++) {
      let node = lists[i];
      if (node) {
        if (nextNode === undefined) {
          nextNode = node
          index = i;
          finishedIteration = false;
        } else if (node.val < nextNode.val) {
          nextNode = node
          index = i;
          finishedIteration = false;
        }
      }
    }
    if (index !== undefined) {
      lists[index] = nextNode.next;
      current.next = nextNode;
      current = current.next;
    }
    if (finishedIteration) break;
  }
  return falseHead.next;
};