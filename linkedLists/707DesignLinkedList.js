var Node = function(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var MyLinkedList = function() {
  this.tail = null;
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  // use while loop to traverse and return value at index
  // return -1 if index is invalid
  let node = this.head;
  for (let i = 0; i < index; i++) {
    node = node.next;
    if (node === null) break;
  }
  return node === null ? -1 : node.val;

};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  // if head and tail are null, create node and set head and tail equal to that new node
  // else, create new node, point it to head, set new node as new head
  let newNode = new Node(val);
  if (this.head === null && this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  // if head and tail are null, create node and set head and tail equal to that new node
  // if head and tail are the same node, craete new node, set it as tail, have head point to tail
  // else, create new node, point tail to new node, set new node as new tail
  let newNode = new Node(val);
  if (this.head === null && this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // use while loop to traverse list and insert
    // do nothing if index is invalid
    if (index === 0) {
      this.addAtHead(val);
    } else {
      let newNode = new Node(val);
      let node = this.head;
      if (node === null) return;
      for (let i = 1; i < index; i++) {
        node = node.next;
        if (node === null) return;
      }
      newNode.next = node.next;
      node.next = newNode;
      if (node === this.tail) {
        this.tail = newNode;
      }
    }

};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // use while loop to traverse list and delete at index
      // if deleting node that is both the tail and the head, set head and tail to null
      // if deleting node that is the head, set new head
      // if deleting node that is the tail, set new tail
    // do nothing if index is invalid
    let currentNode = new Node();
    currentNode.next = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode.next === null) return;
    }
    let nodeToDelete = currentNode.next;
    if (nodeToDelete === this.head && nodeToDelete === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (nodeToDelete === this.head) {
      this.head = nodeToDelete.next;
    } else if (nodeToDelete === this.tail) {
      this.tail = currentNode;
      this.tail.next = null;
    } else {
      currentNode.next = nodeToDelete.next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */