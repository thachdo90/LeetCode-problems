/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// I: Array of integers
// O: number
// C: time O(n)
// E: k = n, k = 1

// Obs: finding the abs max is easy in O(n) time, the challenge is to also remember multiple maxes

// Strategy: iterate through the array and store the elements in some DS that can quickly retrieve an element based its sorted order
// we can sort this but it would be O(nlogn)
// what DS can I use to record multiple maxes in order?
var Node = function(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
var Queue = function(limit) {
  this.limit = limit;
  this.size = 0;
  this.head = null;
}
// if size is less than limit, always add
// is size is equal to limit, add only if the value is greater than the head;
Queue.prototype.add = function(val) {
  if (this.size === 0) {
    this.head = new Node(val);
    this.size++;
  } else if (this.size < this.limit || val > this.head.val) {
    // create false head
    let currentNode = new Node();
    currentNode.next = this.head;
    while (true) {
      if (currentNode.next === null || currentNode.next.val >= val) {
        let newNode = new Node(val, currentNode.next);
        currentNode.next = newNode;
        this.size++;
        if (newNode.val <= this.head.val) {
          this.head = newNode;
        }
        while (this.size > this.limit) {
          this.head = this.head.next;
          this.size--;
        }
        break;
      }
      currentNode = currentNode.next;
    }
  }
}

Queue.prototype.headValue = function() {
  return this.head.val;
}

Queue.prototype.toArray = function() {
  let array = [];
  let node = this.head;
  while (node) {
    array.push(node.val);
    node = node.next;
  }
  return array;
}

var findKthLargest = function(nums, k) {
  let queue = new Queue(k);
  for (let number of nums) {
    queue.add(number);
  }
  console.log('queue array', queue.toArray())
  return queue.headValue();
};