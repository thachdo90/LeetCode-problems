function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const generateNodeFromArray = (array) => {
  let previousNode = null;
  while (array.length > 0) {
      let node = new ListNode(array.pop())
      node.next = previousNode;
      previousNode = node;
  }
  return previousNode;
}

const printList = (head) => {
  while (head) {
  console.log(head.val)
  head = head.next;
  }
}

const listIntoArray = head => {
  let results = [];
  while (head) {
    results.push(head.val)
    head = head.next;
  }
}