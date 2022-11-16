/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// I: two numbers, n and k
// O: number, person that wins, 1 - n
// C:
// E: k = 1, k = n

// strategy1: use mod operator and reconstruct a new array after each person is eliminated, but this uses so much extra space
// strategy2: use a circular doubly linked list and delete until the node points to itself because it's the only one left
// optimization: track size of the linked list so we don't have to go around the list multiple times
var findTheWinner = function(n, k) {
  let size = n;
  const Node = function(val = 0, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
  let head = new Node(1);
  let currentNode = head;
  for (let val = 2; val <= n; val++) {
    let newNode = new Node(val);
    newNode.prev = currentNode;
    currentNode.next = newNode;
    currentNode = newNode;
  }
  head.prev = currentNode;
  currentNode.next = head;
  while (currentNode.next !== currentNode) {
    for (let i = 0; i < k % size; i++) {
      currentNode = currentNode.next;
    }
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode = prevNode;
    size--;
  }
  return currentNode.val;

};